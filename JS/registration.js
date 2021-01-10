firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    window.location.replace("main.html");
  }
});


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
  let auth = firebase.auth();
  let username = document.getElementById("username");
  auth.createUserWithEmailAndPassword(email, password)
  .then((user) => {
    user.updateProfile({
      displayName: userName
    }).then(function() {
      console.log("Update successful.");
    }).catch(function() {
      console.log("An Error Happened.");
    });


    window.location.replace("main.html");
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    alert(errorMessage);
  });
}
