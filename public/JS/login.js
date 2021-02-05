
function login() {

  let userEmail = document.getElementById("email").value;
  let userPassword = document.getElementById("password").value;


  firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
  .then((user) => {
    console.log(user);
    window.location.replace("main.html");
  })
  .catch((err) => {
    var errorCode = err.code;
    var errorMessage = err.message;
    // ..
    alert(errorMessage);

  });
}
