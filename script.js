const myLibrary=[];

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

function addBookToLibrary(){

}


//DIALOG OPENING PROCESS

const addButton=document.querySelector(".add-icon");
const bookForm=document.querySelector('.add-book');

addButton.addEventListener('click',()=>{
    bookForm.showModal();
})
