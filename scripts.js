const myLibrary = [];

function Book(title, author, pages, readStatus) {
    if (!new.target) {
        throw new TypeError("calling Book constructor without new is invalid");
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}


function addBookToLibrary(title, author, pages, readStatus) {
    const book = new Book(title, author, pages, readStatus)
    myLibrary.push(book);
}


function displayLibrary() {
    for (let book of myLibrary) {
        const card = document.createElement('div');
        card.innerHTML = `<p>Title: ${book.title}</p><p>Author: ${book.author}</p><p>Pages: ${book.pages}</p><p>Read: ${book.readStatus}</p>`;
        card.classList.toggle('card');
        const parent = document.querySelector('.cards-container');
        parent.appendChild(card);
    }
}

function clearDisplay() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
        const parent = document.querySelector('.cards-container');
        parent.removeChild(card);
    })
}

function addNewBook(event) {
    event.preventDefault();
    let title = this.form.title.value;
    let author = this.form.author.value;
    let pages = this.form.pages.value;
    let readStatus = this.form.readStatus.value;
    addBookToLibrary(title, author, pages, readStatus);
    clearDisplay();
    displayLibrary();
    this.form.reset();
    dialog.close(); 
}

addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 281, 'Yes');
addBookToLibrary('1984', 'George Orwell', 287, 'Yes');
addBookToLibrary('The Great Gatsby', 'F. Scott Fitzgerald', 180, 'No');
addBookToLibrary('Pride and Prejudice', 'Jane Austen', 279, 'Yes');
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 310, 'No');

displayLibrary();

const dialog = document.querySelector('dialog');
const addBtn = document.querySelector('.addBtn');
const closeBtn = document.querySelector('.closeBtn');
const submitBtn = document.querySelector('.submitBtn')

addBtn.addEventListener("click", () => {
    dialog.showModal();
});

closeBtn.addEventListener("click", () => {
    dialog.close();
});

submitBtn.addEventListener("click", addNewBook, false);

