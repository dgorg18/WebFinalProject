document.addEventListener("DOMContentLoaded", function(event) {
  var item, tile, author, publisher, bookLink, bookImg;
  let apiKey = "AIzaSyBwUrLy1xEhlvB98kKv_RIo9_O6D3aoBT4";
  let searchString = "sherlock";
  let a = fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchString}&maxResults=40&key=${apiKey}`);
  let row = document.getElementById("row");
  a.then(response => response.json())
    .then(result => {
      let arr = result.items;
      console.log(arr.length);
      for (let i = 0; i < arr.length; i++) {

        let title = arr[i].volumeInfo.title;
        let author = arr[i].volumeInfo.authors;
        let publisher = arr[i].volumeInfo.publisher;
        let bookLink = arr[i].volumeInfo.previewLink;
        //let bookIsbn = arr[i].volumeInfo.industryIdentifiers[1].identifier;
        let bookImg = (arr[i].volumeInfo.imageLinks) ? arr[i].volumeInfo.imageLinks.thumbnail : "no_image.jpg";
        row.innerHTML += createElement(title,author,publisher,bookLink, bookImg);
        //console.log(title);
        //console.log( author);// + " " +
      //  console.log(publisher); // + " " + bookLink + " " + bookIsbn + " " + bookImg);
      }
    });
});


function createElement(title, author, publisher, booklink, bookImg) {
  let result = `<div class="row-container">
      <div class="row-image">
      <img src="${bookImg}" alt="..."/>
    </div>
    <div class = "row-info">
      <h1 class = "book_title">${title}</h1>
      <h3 class = "book_author">${author}</h3>
      <h5 class = "publisher">${publisher}</h5>
      <br/>
      <a href="${booklink}">Book Link</a>
    </div>
  </div>`;
  return result;
}


// AIzaSyBwUrLy1xEhlvB98kKv_RIo9_O6D3aoBT4
