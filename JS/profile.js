
let auth = firebase.auth();


auth.onAuthStateChanged(function(user) {
    let loginDiv = document.getElementById("login-logout");
    let leftPart = document.getElementById('leftPart')


    if (user) {

      loginDiv.innerHTML = userLoggedIn();
      leftPart.innerHTML = loggedInText(user.displayName);
      let logoutButton = document.getElementById('logout');
      logoutButton.onclick = function() {
            auth.signOut().then(() => {
              window.location.replace("main.html");
            }).catch(() => {
              alert("Couldn't sign out");
            });
      };
    } else {
      loginDiv.innerHTML = userLoggedOut();
      leftPart.innerHTML = notLoggedInText();
    }
});

function notLoggedInText() {
  return `<div id="not-logged-in">
    <h1>You're not logged in.</h1>
    <h2>Log in to access all services.</h2>
      </div>`;
};

function loggedInText(username){
  return `<div>
    <h1>Hello,  ${username}.</h1>
    <h2>You could log out, but do you want to?.</h2>
      </div>`;
}


function userLoggedOut(){
  return `<a href="login.html" id="login"> Login
            <span> </span>
            <span> </span>
            <span> </span>
            <span> </span>
          </a>
          <a href="registration.html" id="register"> Register
            <span> </span>
            <span> </span>
            <span> </span>
            <span> </span>
          </a>`;
};

function userLoggedIn(){
return `<a href="#" id="logout"> Log Out
          <span> </span>
          <span> </span>
          <span> </span>
          <span> </span>
        </a>`;
};
