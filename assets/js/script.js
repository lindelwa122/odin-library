const myLibrary = [];

function Book(id, title, author, blurb, pages, read) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.blurb = blurb;
  this.pages = pages;
  this.read = read;
}

function createBookInstance(title, author, blurb, pages, read) {
  const id = myLibrary.length + 1;
  return new Book(id, title, author, blurb, pages, read);
}

function addBookToLibrary(book) {
  const bookInstance = createBookInstance(
    book.title,
    book.author,
    book.blurb,
    book.pages,
    book.read
  );

  myLibrary.push(bookInstance);
}

function createCard(book) {
  const card = document.createElement("div");
  card.className = "card";

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

  card.append(title, author, description, read);
  return card;
}

function displayBooks() {
  const booksContainer = document.querySelector(".books-container");

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
});

const formFields = document.querySelectorAll("form > input, select, textarea");
formFields.forEach((field) => {
  field.addEventListener("blur", () => field.classList.add("focus"));
});