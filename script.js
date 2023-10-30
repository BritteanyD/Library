// Dark mode and Light mode

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
//Take user's input and store the new book objects into an array

 const myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary() {
  // do stuff here
}

//Click button to bring up user input as a form

