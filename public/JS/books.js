document.addEventListener("DOMContentLoaded", function(event) {
  let searchArr = ["Witcher", "Maze Runner", "Divine Comedy", "Marvel", "Bible", "Sherlock Holmes", "DC Comics"];
  let index = Math.floor(Math.random() * searchArr.length);
  changeTitle(searchArr[index]);
  fetchBooks(searchArr[index]);

});

function fetchBooks(searchString){
  let item, tile, author, publisher, bookLink, bookImg;
  let apiKey = "AIzaSyBwUrLy1xEhlvB98kKv_RIo9_O6D3aoBT4";
  let aFetch = fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchString}&maxResults=40&key=${apiKey}`);
  let row = document.getElementById("row");

  aFetch.then(response => response.json())
    .then(result => {
      let arr = result.items;

      for (let i = 0; i < arr.length; i++) {

        let title = arr[i].volumeInfo.title;
        let author = arr[i].volumeInfo.authors;
        let publisher = arr[i].volumeInfo.publisher;
        let bookLink = arr[i].volumeInfo.previewLink;
        //let bookIsbn = arr[i].volumeInfo.industryIdentifiers[1].identifier;
        let bookImg = (arr[i].volumeInfo.imageLinks) ? arr[i].volumeInfo.imageLinks.thumbnail : "no_image.jpg";
        row.innerHTML += createElement(title,author,publisher,bookLink, bookImg);
      }
    });
}

function createElement(title, author, publisher, booklink, bookImg) {
  if(publisher === null || typeof publisher === 'undefined') {
    publisher = ""
  }

  let result = `<div class="row-container" onclick="location.href='${booklink}'">
      <div class="row-image">
      <img id='row-img' src="${bookImg} " alt="..."/>
    </div>
    <div class = "row-info">
      <h1 class = "book_title">${title}</h1>
      <h3 class = "book_author">${author}</h3>
      <h5 class = "publisher">${publisher}</h5>
      <br/>

    </div>
  </div>`;
  return result;
}

function changeTitle(title){
  let searchTitle = document.getElementById('search-title');
  searchTitle.innerHTML = title;

}

document.addEventListener("keyup", function(event) {
  let EnterCode = 13
  if (event.keyCode === EnterCode) {
    let searchString = document.getElementById('searchBox').value;

    if(searchString && searchString.length > 0){
      row.innerHTML = '';
      changeTitle(searchString);
      fetchBooks(searchString);
    }
  }
});



// AIzaSyBwUrLy1xEhlvB98kKv_RIo9_O6D3aoBT4
