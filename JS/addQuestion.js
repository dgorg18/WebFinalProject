const submitButton = document.getElementById("submitButton");

const questionObj =  firebase.database().ref().child('Questions');

submitButton.onclick = function submitAction(){
    const bookName = document.getElementById("BookName").value;
    const question = document.getElementById("question").value;
    const questionRef = questionObj.push();
    var user = firebase.auth().currentUser;

    console.log(user.uid);
    if (user){
        questionRef.set({
          userID: user.uid,
          userName: user.displayName,
          bookName: bookName,
          question: question
        });
    } else {
      console.log("User not logged in.");
      alert("Error occured. User not logged in.");
    }

};
