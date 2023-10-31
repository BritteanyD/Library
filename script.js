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
  let submit = document.getElementsByClassName("form-submit");
  submit.submit();

}

//Click button to bring up user input as a form

