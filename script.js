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

const AddContainer=document.querySelector('.add-container');
const siteContainer=document.querySelector('.site-container');
const bookContainer=document.querySelector('.book-container');

const cardContainer=document.querySelector('.card-container');

addButton.addEventListener('click', () => {
    bookDialog.showModal();

    bookName.addEventListener("input", e => addTitle.textContent = e.target.value);

    addForm.addEventListener('submit', e => {
        e.preventDefault();

        const bookInfo = new FormData(addForm);     //extracts from data to a new FormData Object
        const obj = Object.fromEntries(bookInfo);   //divides it into key value pairs


        if (obj['book-name'] != '')
            myLibrary.push(obj);

        console.log(myLibrary);
        addForm.reset();
        addTitle.textContent='Add Book Name';
        bookDialog.close();


        AddContainer.style.display='none';      //This clears the + button
        siteContainer.classList.add('added');   //Adds .added to the classlist of the siteContainer
        bookContainer.classList.add('visible');   //Adds .added to the classlist of the siteContainer

    })
})

addEventListener('keydown',(e)=>{
    if (e.key=='c') {
        console.log('created')

        const card=document.createElement('div');
        card.classList.add('card');
        cardContainer.appendChild(card);
    }
    if(e.key=='d'){
        console.log('deleted')
        cardContainer.removeChild(cardContainer.lastElementChild)
    }

})


/*
    HOW TO DO STAGE3:

    HTML & CSS:
-(DONE) Lay out book-container layout in headers and body format
-(DONE) Create first book block layout with sample text
-Create the additional book layout
-(DONE) Create a grid with both book layouts with book-container body as parent
-Set grid up so that it starts wrapping after a certain book amount

    JS:
-We'll figure it out once we get the HTML & CSS portion nailed.
*/