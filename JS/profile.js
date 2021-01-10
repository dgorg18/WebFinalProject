
let auth = firebase.auth();


auth.onAuthStateChanged(function(user) {
    let loginDiv = document.getElementById("login-logout");
    let center = document.getElementById("center");


    if (user) {

      loginDiv.innerHTML = userLoggedIn();
      let logoutButton = document.getElementById('logout');
      logoutButton.onclick = function() {
            auth.signOut().then(() => {
              window.location.replace("main.html");
            });
      };
    } else {
      loginDiv.innerHTML += userLoggedOut();
      center.innerHTML += notLoggedInText();
    }
});

function notLoggedInText() {

  return `<h1 id="not-logged-in">You're not logged in.</h1>`;
};


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
