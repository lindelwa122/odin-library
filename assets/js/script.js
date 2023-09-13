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

function displayBooks() {
  const booksContainer = document.querySelector(".books-container");

  for (const book of myLibrary) {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = book;

    booksContainer.appendChild(card);
  }
}

const addNewBookButton = document.querySelector(".new-book");
addNewBookButton.addEventListener("click", () => {
  const modal = document.querySelector("dialog");

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

  console.log("formData", getFormData(e.target));

  // const title = document.querySelector("#title");
  // addBookToLibrary(title.value);
});