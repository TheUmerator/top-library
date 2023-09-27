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

const AddContainer = document.querySelector('.add-container');
const siteContainer = document.querySelector('.site-container');
const bookContainer = document.querySelector('.book-container');

const cardContainer = document.querySelector('.card-container');
const cardAddButton = addButton.cloneNode(true);
let bookCount = 0;
// cardAddButton
//addButton
cardAddButton.addEventListener('click', () => {
    bookDialog.showModal();

    bookName.addEventListener("input", e => addTitle.textContent = e.target.value);

    addForm.addEventListener('submit', e => {
        e.preventDefault();

        const bookInfo = new FormData(addForm); //extracts from data to a new FormData Object
        const obj = Object.fromEntries(bookInfo); //divides it into key value pairs


        if (obj['book-name'] != '') {
            bookCount++;


            myLibrary.push(obj);


            console.log(myLibrary);
            addForm.reset();
            addTitle.textContent = 'Add Book Name';
            bookDialog.close();


            AddContainer.style.display = 'none'; //This clears the + button
            siteContainer.classList.add('added'); //Adds .added to the classlist of the siteContainer
            bookContainer.classList.add('visible'); //Adds .added to the classlist of the siteContainer

            const card = document.createElement('div');
            card.classList.add('card');

            const cardName = document.createElement('h2');
            cardName.classList.add('name');
            cardName.textContent=myLibrary[bookCount - 1]['book-name'];
            card.appendChild(cardName);


            const cardAuthor = document.createElement('h3');
            cardAuthor.classList.add('author');
            cardAuthor.textContent=myLibrary[bookCount - 1]['book-author'];
            card.appendChild(cardAuthor);


            const cardPages = document.createElement('div');
            cardPages.classList.add('pages');
            cardPages.textContent=myLibrary[bookCount - 1]['book-pages'];
            card.appendChild(cardPages);

            /*
                <div class="status">
                <span class="read">READ</span>
                <span>UNREAD</span></div>
                <button class="remove">REMOVE</button>
             */

            const cardStatus = document.createElement('div');
            const cardRead=document.createElement('span');
            const cardUnread=document.createElement('span');
            cardStatus.classList.add('status');
            cardRead.classList.add('read');
            cardUnread.classList.add('unread');
            cardStatus.appendChild(cardRead);
            cardStatus.appendChild(cardUnread);
            card.appendChild(cardStatus);


            const cardRemove = document.createElement('button');
            cardRemove.classList.add('remove');

            card.appendChild(cardRemove);


            cardContainer.appendChild(card);
        }



    })
})

addEventListener('keydown', (e) => {
    if (e.key == 'c') {
        console.log('created')

        const card = document.createElement('div');
        card.classList.add('card');
        cardContainer.appendChild(card);
    }
    if (e.key == 'd') {
        console.log('deleted')
        cardContainer.removeChild(cardContainer.lastElementChild)
    }
    if (e.key == 'a') {
        const card = document.createElement('div');

        card.classList.add('card');
        card.classList.add('add');

        card.appendChild(cardAddButton);
        cardAddButton.classList.add('card-icon');
        cardContainer.appendChild(card);
    }

})


/*
    HOW TO DO STAGE3:

    HTML & CSS:
-(DONE) Lay out book-container layout in headers and body format
-(DONE) Create first book block layout with sample text
-(DONE) Create the additional book layout
-(DONE) Create a grid with both book layouts with book-container body as parent
-(DONE) Set grid up so that it starts wrapping after a certain book amount

    JS:
-Streamline the code so that its more readable
-We want the cards to reflect on the READ/UNREAD status, the selected 
 choice should select that button by default
-We also want to make the READ/UNREAD an actual button the user can click
 so that it actually changes the database on the back end. Speaking of,
-We need the array of myLibrary to keep track of what we're doing.
*/