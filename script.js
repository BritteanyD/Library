const myLibrary = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: "295",
    read: true
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: "281",
    read: false
  }
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let title = document.querySelector(".title").value = "";
  let author = document.querySelector(".author").value = "";
  let pages = document.querySelector(".pages").value = "";
  let read = document.querySelector("#checked").checked = false;
  let bookInfo = new Book(title, author, pages, read);
  return bookInfo;
}

let newBook = document.querySelector(".new-book");
newBook.addEventListener("click", function () {
  document.querySelector(".side-bar").style.display = "block";
});

let formSubmit = document.querySelector(".form-submit");
formSubmit.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(addBookToLibrary())
  document.querySelector(".side-bar").style.display = "none";
});




