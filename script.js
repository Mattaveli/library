var booksArr = [];
const form = document.querySelector("#form");
const submitButton = document.querySelector(".submit");
const newButton = document.querySelector(".button-3");
const addNewSection = document.querySelector(".add-new");
const bookSection = document.querySelector(".books-container");

submitButton.addEventListener("click", (e) => {
  addBookToLibrary();
  removeAllBooks();
  createBookCards(booksArr);
  clearInputFields();
  e.preventDefault();
});

newButton.addEventListener("click", () => {
  addNewSection.style.visibility = "visible";
  addNewSection.style.opacity = 1;
});

function createBookCards(books) {
  for (let book in books) {
    var element = document.createElement("div");
    element.classList.add("card");
    element.dataset.index = booksArr.length - 1;

    var buttonElement = document.createElement("button");
    buttonElement.classList.add("close-button");
    var title = document.createElement("p");
    var author = document.createElement("p");
    var pages = document.createElement("p");
    console.log(buttonElement);

    buttonElement.textContent = "X";
    title.textContent = books[book].title;
    author.textContent = books[book].author;
    pages.textContent = books[book].pages;

    element.appendChild(buttonElement);
    element.appendChild(title);
    element.appendChild(author);
    element.appendChild(pages);

    bookSection.appendChild(element);
  }
  createEventListener();
}

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}

function addBookToLibrary() {
  let title = document.querySelector(".title").value;
  let author = document.querySelector(".author").value;
  let pages = document.querySelector(".pages").value;

  let bookObj = new Book(title, author, pages);
  booksArr.push(bookObj);

  return;
}

function clearInputFields() {
  document.querySelector(".title").value = "";
  document.querySelector(".author").value = "";
  document.querySelector(".pages").value = "";
}
function removeAllBooks() {
  bookSection.textContent = "";
}

function createEventListener() {
  const closeButton = document.querySelectorAll(".close-button");
  console.log(closeButton);

  closeButton.forEach((button) => {
    button.addEventListener("click", () => {
      console.log(button.parentElement);
      var index = button.parentElement.getAttribute("data-index");
      booksArr.splice(index, 1);
      button.parentElement.remove();
    });
  });
}
