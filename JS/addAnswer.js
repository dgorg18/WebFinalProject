const submitButton = document.getElementById("submitButton");

const answerRef =  firebase.database().ref().child('Answers');
const questionsRef = firebase.database().ref('Questions');

const auth = firebase.auth();

window.onload = function() {
  const questionElem = document.getElementById('question');


  const user = auth.currentUser;
  auth.onAuthStateChanged(function(user) {

    if(user){
      params = parseParameters();

      questionsRef.child(params.id).once('value', (snap) => {
          const data = snap.val();
          questionElem.innerHTML = data.question;
      });

      console.log(params.id);
      submitButton.onclick = function() {submitAction(params.id, user)};
    } else {
      window.location.replace("main.html");
    }

  });

  //
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

function submitAction(questionID, user){
  const answerInput = document.getElementById('answers').value;
  newRef = answerRef.child(questionID).push();
  newRef.set({
    userID: user.uid,
    userName: user.displayName,
    answer: answerInput
  }).then(()=> {
    window.history.back();
  }).catch(()=>{
    alert("Error: Something went wrong.")
  });
};
