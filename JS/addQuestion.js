const submitButton = document.getElementById("submitButton");

const questionObj =  firebase.database().ref().child('Questions');

submitButton.onclick = function submitAction(){
    const bookName = document.getElementById("BookName").value;
    const question = document.getElementById("question").value;
    const questionRef = questionObj.push();
    var user = firebase.auth().currentUser;

    console.log(user.uid);
    questionRef.set({
      userID: user.uid,
      bookName: bookName,
      question: question
    });

};

questionObj.on('value', snap =>  console.log(snap.val()));
