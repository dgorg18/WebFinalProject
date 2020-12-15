function signUp() {

  let userEmail = document.getElementById("email").value;
  let userPassword = document.getElementById("password").value;
  let userPasswordRepeat = document.getElementById("passwordRepeat").value;


  if(userPassword === userPasswordRepeat){
    if(checkPasswordIsHardEnough(userPassword)){
        registerUser(userEmail, userPassword);
    } else {
      alert("Password too short. It should be at least 6 characters.")
    }

  } else {
    alert("Passwords don't match.")
  }

}

function checkPasswordIsHardEnough(password){
  return password.length >= 6;
}

function registerUser(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((user) => {
    alert(user + "  " + password);
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    alert(errorCode + "  " + errorMessage);
  });
}
