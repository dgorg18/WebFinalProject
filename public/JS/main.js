
const paginationMap = {
  0: ()=>{getMainsInfo()},
  1: getBooksInfo,
  2: getDiscussionInfo,
  3: getFRInfo,
  4: getContactInfo
};

window.onload = function() {
  let paginationButtons = document.getElementsByName("toggle");

  for(let i = 0; i < paginationButtons.length; i++){
    paginationButtons[i].onclick = paginationMap[i]
  }
  paginationButtons[0].checked = true;
  getMainsInfo();
}


function getMainsInfo(){
  const title = document.getElementById("title");
  const content = document.getElementById("content");

  title.innerHTML = "Main";
  content.innerHTML = "Get to know structure of this site with this preview.";


}




function getBooksInfo(){
  const title = document.getElementById("title");
  const content = document.getElementById("content");

  title.innerHTML = "Books";
  content.innerHTML = "Books page let's you search any book you want.";
}
function getDiscussionInfo(){
  const title = document.getElementById("title");
  const content = document.getElementById("content");

  title.innerHTML = "Discussions";
  content.innerHTML = "You can ask or answer questions about books.";
}

function getFRInfo(){
  const title = document.getElementById("title");
  const content = document.getElementById("content");

  title.innerHTML = "Future Releases";
  content.innerHTML = "This page doesn't work yet.";
}

function getContactInfo(){
  const title = document.getElementById("title");
  const content = document.getElementById("content");

  title.innerHTML = "Contact";

  content.innerHTML = `Call or write an email to us, we won't care much
    but why shouldn't you try?`;
}

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    let paginationButtons = document.getElementsByName("toggle");
    let index = -1;
    for(let i = 0; i < paginationButtons.length; i++){
      if(paginationButtons[i].checked){
        index = i;
        break;
      }
    }

    if (e.keyCode == '37') {
      if(index - 1 >= 0){
        paginationButtons[index].checked = false;
        paginationButtons[index - 1].checked = true;
        paginationMap[index - 1]();
      }
    }
    else if (e.keyCode == '39') {
      if(index + 1 < paginationButtons.length){
        paginationButtons[index].checked = false;
        paginationButtons[index + 1].checked = true;
        paginationMap[index + 1]();

      }
    }

}
