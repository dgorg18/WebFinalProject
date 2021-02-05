let topics = document.getElementById('topic-list');

document.addEventListener("DOMContentLoaded", function(event) {
  const questionObj = firebase.database().ref().child('Questions');

  // questionObj.on('child_added', (data) => {
  //   addCommentElement(postElement, data.key, data.val().text, data.val().author);
  // });


  const readQuestions = snapshot => {
    const questions = [];
    snapshot.forEach(child => {
      questions.push({key: child.key, value: child.val()});
    });

    return Promise.resolve(questions);
  };

  const getQuestions = () => questionObj.once('value').then(readQuestions);

  getQuestions().then( questions => {
    topics.innerHTML = '';
    for(let i = 0; i < questions.length; i++){
      author = questions[i].value.userName;
      title = questions[i].value.bookName;
      question = questions[i].value.question;
      id = questions[i].key;
      createElement(author,title,question, id);
    }
  });

});

function createElement(author,title,question, id){
  topics.append( getSingleRow(author, title, question, id));
}

function getSingleRow(author, title, question, id) {
  console.log(id);
  let row = `<div class="row-container" id=${id}' onclick="location.href='question.html?id=${id}'">
                <div class="row-info">
                  <h4 class="question_author">${author}</h4>
                  <h1 class="book-title">${title}</h1>
                  <p class="question">${question}
                  </p>
                </div>
              </div>`;
  let div = document.createElement('div');
  div.innerHTML = row.trim();

  return div.firstChild;
}

let auth = firebase.auth();


let element = document.getElementById('addQuestion');
let loginDiv = document.getElementById('login-div');
let backfix = document.getElementById('backfix');
let cancelButt = document.getElementById('cancelButt');
let loginButt = document.getElementById('loginButt');
let timeVar = 1.5 * 1000;

cancelButt.onclick = function() {
  loginDiv.style.display = 'none';
  backfix.style.display = 'none';
}

loginButt.onclick = function() {
  window.location.replace('login.html');
}

element.onclick = function() {
  user = auth.currentUser
  if (user) {
    window.location.replace('addQuestion.html');
  } else {
    loginDiv.style.display = 'block';
    backfix.style.display = 'block';
  }
}
