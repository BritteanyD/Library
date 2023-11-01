//Take user's input and store the new book objects into an array

//const myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // do stuff here
  let title = document.querySelector(".title").value;
  let author = document.querySelector(".author").value;
  let pages = document.querySelector(".pages").value;
  let read = document.querySelector("#checked").checked;
  let bookInfo = new Book(title, author, pages, read);
  return bookInfo;
}

let newBook = document.querySelector(".new-book");
newBook.addEventListener("click", function() {
document.querySelector(".side-bar").style.display = "block";
});

let formSubmit = document.querySelector(".form-submit");
formSubmit.addEventListener("click", function(event) {
  event.preventDefault();
  console.log(addBookToLibrary())
  document.querySelector(".side-bar").style.display = "none";
  //addBookToLibrary()
});




