//Take user's input and store the new book objects into an array

//const myLibrary = [];

/*function Book(title, author, pages, read) {
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

//Collapse and expand sidebar*/

//Create alert for form inputs
let newBook = document.querySelector(".new-book");
newBook.addEventListener("click", function() {
document.querySelector(".side-bar").style.display = "block";
});

let formSubmit = document.querySelector(".form-submit");
formSubmit.addEventListener("click", function() {
  alert("hello")
});




