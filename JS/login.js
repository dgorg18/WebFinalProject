firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    alert("Logged in");
    window.location.replace("main.html");
  }
});


function login() {

  let userEmail = document.getElementById("email").value;
  let userPassword = document.getElementById("password").value;

  alert(userEmail + "  " + userPassword);

  firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
  .then((user) => {
    window.location.replace("main.html");
  })
  .catch((err) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    alert(errorCode + "  " + errorMessage);

  });
}
