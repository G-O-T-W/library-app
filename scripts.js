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


function clearDisplay() {
    const cards = document.querySelectorAll('.card');
    const parent = document.querySelector('.cards-container');
    cards.forEach((card) => {
        parent.removeChild(card);
    })
}

function addBookInfo(book, card) {
    card.innerHTML = `<p>Title: ${book.title}</p><p>Author: ${book.author}</p><p>Pages: ${book.pages}</p><p>Read: ${book.readStatus}</p>`;
    card.classList.toggle('card');
}


function addUtils(book, utils) {
    // Add Delete Button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.toggle('deleteBtn');
    deleteBtn.setAttribute('data-book-id', book.id);

    // Add event listeners
    deleteBtn.addEventListener("click", (event) => {
        const bookID = event.target.getAttribute('data-book-ID');
        console.log("To delete:", book.title, " (ID): ", bookID);
        for (book of myLibrary) {
            if(book.id == bookID) {
                let index = myLibrary.indexOf(book);
                myLibrary.splice(index, 1);
                displayLibrary();
            }
        }
    });

    utils.appendChild(deleteBtn);
}

function displayLibrary() {
    clearDisplay();
    for (let book of myLibrary) {
        // Add Book info on each card 
        const card = document.createElement('div');
        addBookInfo(book, card);

        const utils = document.createElement('div');
        addUtils(book, utils);
    
        card.appendChild(utils);

        const parent = document.querySelector('.cards-container');
        parent.appendChild(card);
    }
}


function addNewBook(event) {
    event.preventDefault();
    let title = this.form.title.value;
    let author = this.form.author.value;
    let pages = this.form.pages.value;
    let readStatus = this.form.readStatus.value;
    addBookToLibrary(title, author, pages, readStatus);
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
const deleteBtns = document.querySelectorAll('.deleteBtn')

addBtn.addEventListener("click", () => {
    dialog.showModal();
});

closeBtn.addEventListener("click", () => {
    dialog.close();
});

submitBtn.addEventListener("click", addNewBook, false);

deleteBtns.forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", (event) => {
        const bookID = event.target.getAttribute('data-book-ID');
        console.log(bookID);
        for (book of myLibrary) {
            if(book.id == bookID) {
                let index = myLibrary.indexOf(book);
                myLibrary.splice(index, 1);
                displayLibrary();
            }
        }
    });
});




