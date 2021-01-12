const database = firebase.database();
const questionsRef = database.ref('Questions');
const answersRef = database.ref('Answers');
//addAnswer.html

window.onload = function() {
  params = parseParameters();

  const tagAddAnswer = document.getElementById('AddAnswer');
  tagAddAnswer.href = 'addAnswer.html?id=' + params.id;
  console.log(tagAddAnswer);

  setQuestion(params.id);
  setAnswers(params.id);
}


function parseParameters() {
  let url = document.location.href;
  let params = url.split('?')[1].split('&');
  let data = {};
  for (let i = 0; i < params.length; i++) {
    let temp = params[i].split('=');
    data[temp[0]] = temp[1];
  }
  return data;
}

function setQuestion(id) {
  const authorElem = document.getElementById("question_author");
  const titleElem = document.getElementById("book-title");
  const questionElem = document.getElementById("question");

  questionsRef.child(id).once('value', (snap) => {
    const data = snap.val();
    console.log(authorElem);
    authorElem.innerHTML = data.userName;
    titleElem.innerHTML = data.bookName;
    questionElem.innerHTML = data.question;
  });
}


function getSingleAnswerElement(author, answer) {
  const result = `<div class="answer-container">
    <div class="answer-info">
      <h1 class="answer_author">${author}</h1>
      <p class="answer"> ${answer}
      </p>
    </div>
  </div>`;
  return result;
}


/// Got to finish below three functions.

function setAnswers(questionID){

    const readAnswers = snapshot => {
      const answers = [];
      snapshot.forEach(child => {
        answers.push({key: child.key, value: child.val()});
      });

      return Promise.resolve(answers);
    };

    const getAnswers = () => answersRef.child(questionID).once('value').then(readAnswers);
    const answersList = document.getElementById('answer-list');
    getAnswers().then( answers => {
      answersList.innerHTML = '';
      for(let i = 0; i < answers.length; i++){
        author = answers[i].value.userName;
        answer = answers[i].value.answer;

        answersList.innerHTML += getSingleAnswerElement(author, answer);
      }
    });

}
