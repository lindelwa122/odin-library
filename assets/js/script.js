const myLibrary = [];

function Book(id, title, author, blurb, pages, read) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.blurb = blurb;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
} 

function generateId() {
  const alphanumeric = '0123456789abcdef'.split('');
  let id;
  while (true) {
    id = '';

    const length = Math.ceil(Math.random() * 20);

    for (let i = 0; i <= length; i++) {
      const n = Math.floor(Math.random() * alphanumeric.length);
      id += alphanumeric[n];
    }

    const doesIdExist = myLibrary.some((book) => book.id === id);

    if (!doesIdExist) return id;
  }
}

function createBookInstance(title, author, blurb, pages, read) {
  const id = generateId();
  return new Book(id, title, author, blurb, pages, read);
}

function addBookToLibrary(book) {
  const bookInstance = createBookInstance(
    book.title,
    book.author,
    book.blurb,
    book.pages,
    book.read === "true" ? true : false
  );

  myLibrary.push(bookInstance);
}

function createCard(book) {
  const card = document.createElement("div");
  card.className = "card";

  const iconContainer = document.createElement("div");
  const icon = document.createElement("i");
  icon.classList = "bi bi-x-lg";
  iconContainer.appendChild(icon);

  icon.onclick = () => {
    deleteBook(book.id);
    displayBooks();
  }

  const title = document.createElement("h2");
  title.textContent = book.title;
  title.className = "title";

  const author = document.createElement("h3");
  author.textContent = book.author;
  author.className = "author";

  const description = document.createElement("p");
  description.textContent = book.blurb;
  author.className = "blurb";

  const read = document.createElement("p");
  read.textContent = `Read: ${book.read ? 'Yes' : 'No'}`;
  read.className = "read";

  read.onclick = () => {
    book.toggleRead();
    displayBooks();
  }

  card.append(iconContainer, title, author, description, read);
  return card;
}

function displayBooks() {
  const booksContainer = document.querySelector(".books-container");

  const cards = booksContainer.querySelectorAll(".card");
  for (const card of cards) {
    card.remove();
  }

  for (const book of myLibrary) {
    const card = createCard(book);
    booksContainer.appendChild(card);
  }
}

const addNewBookButton = document.querySelector(".new-book");
const modal = document.querySelector("dialog");
addNewBookButton.addEventListener("click", () => {
  modal.showModal();
});

const form = document.querySelector("form");

function getFormData(form) {
  const obj = {};

  for (const item of form) {
    obj[item.name] = item.value;
  }

  return obj;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  modal.close();
  const formData = getFormData(e.target);
  addBookToLibrary(formData);
  displayBooks();
});

const formFields = document.querySelectorAll("form > input, select, textarea");
formFields.forEach((field) => {
  field.addEventListener("blur", () => field.classList.add("focus"));
});

const xIcon = document.querySelector(".bi-x-lg");
xIcon.addEventListener("click", () => {
  modal.close();
});

function deleteBook(id) {
  const index = myLibrary.findIndex((book) => book.id === id);
  myLibrary.splice(index, 1);
}