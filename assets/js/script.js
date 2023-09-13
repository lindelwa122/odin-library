const myLibrary = ["Man Search For Meaning", "Rich Dad Poor Dad", "Atomic Habits", "Think and Grow Rich", "The Facebook Effect", "The Lean Startup", "Zero To One", "Obstacle Is The Way", "Spud: The Crazy Normal", "No Time For Goodbyes"];

function Book(id, title, author, blurb, pages, read) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.blurb = blurb;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
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

displayBooks();

const addNewBookButton = document.querySelector(".new-book");
addNewBookButton.addEventListener("click", () => {
  const modal = document.querySelector("dialog");

  modal.showModal();
});