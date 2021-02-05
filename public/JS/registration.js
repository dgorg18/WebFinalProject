
const auth = firebase.auth();

function checkPasswordIsHardEnough(password){
  return password.length >= 6;
}


// Function called

function signUp() {

  let userEmail = document.getElementById("email").value;
  let userPassword = document.getElementById("password").value;
  let userPasswordRepeat = document.getElementById("passwordRepeat").value;


  if(userPassword === userPasswordRepeat){
    if(checkPasswordIsHardEnough(userPassword)){
        checkIfUserExistsAndRegister(userEmail, userPassword);
    } else {
      alert("Password too short. It should be at least 6 characters.")
    }

  } else {
    alert("Passwords don't match.")
  }

}


function checkIfUserExistsAndRegister(email, password) {
  let username = document.getElementById("username").value;
  let database = firebase.database().ref('Users');

  database.child(username).once('value', snap => {
    if(snap.exists()){
      alert("Username already exists.");
    } else {
      alert("Username doesn't exists");
      register(email, password, username, database);

    }

  });

}

function register(email, password, username, database){

  auth.createUserWithEmailAndPassword(email, password)
  .then((credentials) => {
    let user = credentials.user;
    console.log(user.uid);

    database.child(username).set({

        uid: user.uid,
        email: email

    });


    user.updateProfile({
        displayName: username
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
    alert("Error: " + errorMessage);
  });
}
