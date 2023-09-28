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

const bookName = document.querySelector('input[id="title"]');
const addTitle = document.querySelector('.modal-title');

const addForm = document.querySelector('.add-form');

const submitButton=document.querySelector('.submit')

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

    // addForm.addEventListener('submit', e => {
    submitButton.addEventListener('click', e => {

        e.preventDefault();
        let book=new Book(document.getElementById('title').value,
                          document.getElementById('author').value,
                          document.getElementById('pages').value,
                          document.querySelector('input[name="read-status"]:checked').value);
                        //document.getElementById('read-status').value   
        // const bookInfo = new FormData(addForm); //extracts from data to a new FormData Object
        // const obj = Object.fromEntries(bookInfo); //divides it into key value pairs

        if (book.title != '') {
        // if (obj['title'] != '') {
            bookCount++;

            myLibrary.push(book);

            // myLibrary.push(obj);
            console.log(book);

            // console.log(obj);
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
            cardName.textContent=myLibrary[bookCount - 1]['title'];
            card.appendChild(cardName);


            const cardAuthor = document.createElement('h3');
            cardAuthor.classList.add('author');
            cardAuthor.textContent=myLibrary[bookCount - 1]['author'];
            card.appendChild(cardAuthor);


            const cardPages = document.createElement('div');
            cardPages.classList.add('pages');
            cardPages.textContent=myLibrary[bookCount - 1]['pages'];
            card.appendChild(cardPages);

            /*
                <div class="status">
                <span class="read">READ</span>
                <span>UNREAD</span></div>
                <button class="remove">REMOVE</button>
             */

            const cardStatus = document.createElement('div');
            const cardRead=document.createElement('button');
            cardRead.textContent='READ';
            const cardUnread=document.createElement('button');
            cardUnread.textContent='UNREAD';
            cardStatus.classList.add('status');
            cardRead.classList.add('read');
            cardUnread.classList.add('unread');

            if(myLibrary[bookCount - 1]['readStatus']=='read')
            cardRead.classList.add('selected');
            
            else
            cardUnread.classList.add('selected');

            cardStatus.appendChild(cardRead);
            cardStatus.appendChild(cardUnread);
            card.appendChild(cardStatus);


            const cardRemove = document.createElement('button');
            cardRemove.textContent='REMOVE';
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


    WHAT TO DO WHEN I GET BACK FROM WORK:
-Add .selected to status buttons to that the selected one will be removed
 THERES MORE TO THIS ONE WE'LL HAVE TO TARGET THESE 
*/