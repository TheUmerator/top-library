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

cardAddButton.addEventListener('click', () => {
    bookDialog.showModal();

    bookName.addEventListener("input", e => addTitle.textContent = e.target.value);


    submitButton.addEventListener('click', e => {

        e.preventDefault();
        let book=new Book(document.getElementById('title').value,
                          document.getElementById('author').value,
                          document.getElementById('pages').value,
                          document.querySelector('input[name="read-status"]:checked').value);

        if (book.title != '') {


            myLibrary.push(book);


            console.log(book);

            console.log(myLibrary);
            addForm.reset();
            addTitle.textContent = 'Add Book Name';
            
            bookDialog.close();


            AddContainer.style.display = 'none'; //This clears the + button
            siteContainer.classList.add('added'); //Adds .added to the classlist of the siteContainer
            bookContainer.classList.add('visible'); //Adds .added to the classlist of the siteContainer

            const card = document.createElement('div');
            card.classList.add('card-'+bookCount);

            const cardName = document.createElement('h2');
            cardName.classList.add('name-'+bookCount);
            cardName.textContent=book.title;
            card.appendChild(cardName);


            const cardAuthor = document.createElement('h3');
            cardAuthor.classList.add('author-'+bookCount);
            cardAuthor.textContent=book.author;
            card.appendChild(cardAuthor);


            const cardPages = document.createElement('div');
            cardPages.classList.add('pages-'+bookCount);
            cardPages.textContent=book.pages;
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
            cardStatus.classList.add('status-'+bookCount);
            cardRead.classList.add('read');
            cardUnread.classList.add('unread');


            if(book.readStatus=='read')
            cardRead.classList.add('selected');
            
            else
            cardUnread.classList.add('selected');

            cardStatus.appendChild(cardRead);
            cardStatus.appendChild(cardUnread);
            card.appendChild(cardStatus);


            const cardRemove = document.createElement('button');
            cardRemove.textContent='REMOVE';
            cardRemove.classList.add('remove-'+bookCount);

            card.appendChild(cardRemove);


            cardContainer.appendChild(card);

            bookCount++;
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
    WHAT TO DO NOW?
-seperate each card into it's myLibrary number
-Make REMOVE button actually remove a book from myLibrary
-use READ/UNREAD to toggle the states from read to unread

*/