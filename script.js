const myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;

}

Book.prototype.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.readStatus}`;
}

const theHobbit = new Book('a', 'b', 'c', 'd');

function addBookToLibrary() {

}


//DIALOG OPENING PROCESS

const addButton = document.querySelector(".add-icon");
const bookForm = document.querySelector('.add-book');

const bookName = document.querySelector('input[id="book-name"]');
const addTitle = document.querySelector('.modal-title');


addButton.addEventListener('click', () => {
    bookForm.showModal();

    bookName.addEventListener("input", e => addTitle.textContent = e.target.value);

}
)