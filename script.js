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
const bookDialog = document.querySelector('.add-book');

const bookName = document.querySelector('input[id="book-name"]');
const addTitle = document.querySelector('.modal-title');

const addForm = document.querySelector('.add-form');

addButton.addEventListener('click', () => {
    bookDialog.showModal();

    bookName.addEventListener("input", e => addTitle.textContent = e.target.value);

    addForm.addEventListener('submit', e => {
        e.preventDefault();

        const bookInfo = new FormData(addForm);
        const obj = Object.fromEntries(bookInfo);


        if (obj['book-name'] != '')
            myLibrary.push(obj);

        console.log(myLibrary);
        addForm.reset();
        addTitle.textContent='Add Book Name';
        bookDialog.close();

    })
})
/*
//WHAT TO DO FURTHER ON:
1. Disable form submission and instead
   reroute obtained information to an array
    COMPLETED

2. Clear form data after pressing submit

3. Complete STAGE3 (Adding the Card after the
    form is submitted with the info)
*/