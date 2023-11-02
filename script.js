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
  let title = document.querySelector(".title").value;
  let author = document.querySelector(".author").value;
  let pages = document.querySelector(".pages").value;
  let read = document.querySelector("#checked").checked;

  let bookInfo = new Book(title, author, pages, read);

  document.querySelector(".title").value = "";
  document.querySelector(".author").value = "";
  document.querySelector(".pages").value = "";
  document.querySelector("#checked").checked = false;

  return bookInfo;
}

let newBook = document.querySelector(".new-book");
newBook.addEventListener("click", function () {
  document.querySelector(".side-bar").style.display = "block";
});

let formSubmit = document.querySelector(".form-submit");
formSubmit.addEventListener("click", function (event) {
  event.preventDefault();
  let bookInfo = addBookToLibrary();
  displayBook(bookInfo);
  document.querySelector(".side-bar").style.display = "none";

  myLibrary.push(bookInfo);
});

function displayBook(bookInfo) {
  let bookList = document.querySelector("#book-list");
  let bookDiv = document.createElement("div");
  bookDiv.classList.add("book-style");
  let titleP = document.createElement("p");
  titleP.classList.add("book-title");
  titleP.textContent = `Title: ${bookInfo.title}`;
  let authorP = document.createElement("p");
  authorP.classList.add("book-author");
  authorP.textContent = `Author: ${bookInfo.author}`;
  let pagesP = document.createElement("p");
  pagesP.classList.add("book-pages");
  pagesP.textContent = `Pages: ${bookInfo.pages}`;
  let readP = document.createElement("p");
  readP.classList.add("book-read");
  readP.textContent = `Read: ${bookInfo.read ? "Yes" : "No"}`;

  bookDiv.appendChild(titleP);
  bookDiv.appendChild(authorP);
  bookDiv.appendChild(pagesP);
  bookDiv.appendChild(readP);

  bookList.appendChild(bookDiv);
}

function defaultBooks() {
  let bookList = document.querySelector("#book-list");

  myLibrary.forEach((bookInfo) => {
  let bookDiv = document.createElement("div");
  bookDiv.classList.add("book-style");
  let titleP = document.createElement("p");
  titleP.classList.add("book-title");
  titleP.textContent = `Title: ${bookInfo.title}`;
  let authorP = document.createElement("p");
  authorP.classList.add("book-author");
  authorP.textContent = `Author: ${bookInfo.author}`;
  let pagesP = document.createElement("p");
  pagesP.classList.add("book-pages");
  pagesP.textContent = `Pages: ${bookInfo.pages}`;
  let readP = document.createElement("p");
  readP.classList.add("book-read");
  readP.textContent = `Read: ${bookInfo.read ? "Yes" : "No"}`;

  bookDiv.appendChild(titleP);
  bookDiv.appendChild(authorP);
  bookDiv.appendChild(pagesP);
  bookDiv.appendChild(readP);

  bookList.appendChild(bookDiv);
});
}
window.addEventListener("load", defaultBooks);



