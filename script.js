const myLibrary = []

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function toggleBookReadStatus(bookInfo) {
  //to do toggle book read status
  bookInfo.read = !bookInfo.read;
}

function removeBook(bookInfo) {
  const index = myLibrary.indexOf(bookInfo);
  if (index !== -1) {
    myLibrary.splice(index, 1);
  }
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
  let readToggle = document.createElement("button");
  readToggle.classList.add("read-toggle");
  readToggle.textContent = `Read: ${bookInfo.read ? "Yes" : "No"}`;
  readToggle.addEventListener("click", () => {
    toggleBookReadStatus(bookInfo);
    readToggle.textContent = `Read: ${bookInfo.read ? "Yes" : "No"}`;
  });

  let deleteBook = document.createElement("button");
  deleteBook.classList.add("delete-book");
  deleteBook.textContent = `Delete Book`;
  deleteBook.addEventListener("click", () => {
    removeBook(bookInfo);
    bookList.removeChild(bookDiv);
  });

  bookDiv.appendChild(titleP);
  bookDiv.appendChild(authorP);
  bookDiv.appendChild(pagesP);
  bookDiv.appendChild(readToggle);
  bookDiv.appendChild(deleteBook);

  bookList.appendChild(bookDiv);
}