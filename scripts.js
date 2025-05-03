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
    for (let item of myLibrary) {
        console.log(item);
    }
}


addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 281, true);
addBookToLibrary('1984', 'George Orwell', 287, true);
addBookToLibrary('The Great Gatsby', 'F. Scott Fitzgerald', 180, false);
addBookToLibrary('Pride and Prejudice', 'Jane Austen', 279, true);
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 310, false);

displayLibrary();
