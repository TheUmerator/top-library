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



function addBookToLibrary(book, bookCount) {

    const card = document.createElement('div');

    card.classList.add('card-' + bookCount);

    const cardName = document.createElement('h2');

    cardName.classList.add('name-' + bookCount);
    cardName.textContent = book.title;
    card.appendChild(cardName);


    const cardAuthor = document.createElement('h3');

    cardAuthor.classList.add('author-' + bookCount);
    cardAuthor.textContent = book.author;
    card.appendChild(cardAuthor);


    const cardPages = document.createElement('div');

    cardPages.classList.add('pages-' + bookCount);
    cardPages.textContent = book.pages;
    card.appendChild(cardPages);

    /*
        <div class="status">
        <span class="read">READ</span>
        <span>UNREAD</span></div>
        <button class="remove">REMOVE</button>
     */


    const cardStatus = document.createElement('button');
    cardStatus.classList.add('status-' + bookCount);

    if (book.readStatus == 'read') {
        cardStatus.textContent = 'READ';
        cardStatus.classList.add('selected');
    } else
        cardStatus.textContent = 'UNREAD';

    card.appendChild(cardStatus);


    const cardRemove = document.createElement('button');
    cardRemove.textContent = 'REMOVE';
    cardRemove.classList.add('remove-' + bookCount);
    // cardRemove.classList.add('remove');


    card.appendChild(cardRemove);


    cardContainer.appendChild(card);
}


//DIALOG OPENING PROCESS

const addButton = document.querySelector(".add-icon");
const bookDialog = document.querySelector('.add-book');

const bookName = document.querySelector('input[id="title"]');
const addTitle = document.querySelector('.modal-title');

const addForm = document.querySelector('.add-form');

const submitButton = document.querySelector('.submit')

const AddContainer = document.querySelector('.add-container');
const siteContainer = document.querySelector('.site-container');
const bookContainer = document.querySelector('.book-container');

const cardContainer = document.querySelector('.card-container');
const cardAddButton = addButton.cloneNode(true);



let bookCount = 0;


// const card = document.createElement('div');

// card.classList.add('card');
// card.classList.add('add');

// card.appendChild(cardAddButton);
// cardAddButton.classList.add('card-icon');
// cardContainer.appendChild(card);



cardAddButton.addEventListener('click', () => {
    bookDialog.showModal();

    bookName.addEventListener("input", e => addTitle.textContent = e.target.value);


    submitButton.addEventListener('click', e => {

        e.preventDefault();
        let book = new Book(document.getElementById('title').value,
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

            card.classList.add('card-' + bookCount);

            const cardName = document.createElement('h2');

            cardName.classList.add('name-' + bookCount);
            cardName.textContent = book.title;
            card.appendChild(cardName);


            const cardAuthor = document.createElement('h3');

            cardAuthor.classList.add('author-' + bookCount);
            cardAuthor.textContent = book.author;
            card.appendChild(cardAuthor);


            const cardPages = document.createElement('div');

            cardPages.classList.add('pages-' + bookCount);
            cardPages.textContent = book.pages;
            card.appendChild(cardPages);

            /*
                <div class="status">
                <span class="read">READ</span>
                <span>UNREAD</span></div>
                <button class="remove">REMOVE</button>
             */


            const cardStatus = document.createElement('button');
            cardStatus.classList.add('status-' + bookCount);

            if (book.readStatus == 'read') {
                cardStatus.textContent = 'READ';
                cardStatus.classList.add('selected');
            } else
                cardStatus.textContent = 'UNREAD';

            card.appendChild(cardStatus);


            const cardRemove = document.createElement('button');
            cardRemove.textContent = 'REMOVE';
            cardRemove.classList.add('remove-' + bookCount);
            // cardRemove.classList.add('remove');


            card.appendChild(cardRemove);


            cardContainer.appendChild(card);

            bookCount++;
        }



    })
})


const theHobbit = new Book('The Lord Of The Rings', 'J.R.R. Tolkien', '65', 'unread');
const kiteRunner = new Book('The Kite Runner', 'Khaled Hosseini', '24', 'read');
const ninteenEighty = new Book('1984', 'George Orwell', '84', 'unread');

myLibrary.push(theHobbit,kiteRunner,ninteenEighty);

addBookToLibrary(theHobbit, 0);
addBookToLibrary(kiteRunner, 1);
addBookToLibrary(ninteenEighty, 2);


// EVENT DELEGATION, SURE


// TIME TO START OVER, ONCE MORE WITH FEELING
cardContainer.addEventListener('click', (e) => {
    const buttonClass = e.target.classList.value;
    // console.log(buttonClass);
    
    // console.log(e.target.classList);

    if(buttonClass.includes('remove'))
    {
        const removeIndex=buttonClass.substr(7,buttonClass.length); //'x'
        // console.log(removeIndex);
        myLibrary.splice(removeIndex,1);

        const currentCard=document.querySelector('.card-'+removeIndex);    //'.card-x'
        
        // console.log('card-'+(+removeIndex+1));  //card-(x+1)

        // console.log('library length is '+myLibrary.length);
        for(i=removeIndex;i<myLibrary.length;i++) {
            const nextIndex=+i+1;
            var isSelected=false;
            const nextCard=document.querySelector('.card-'+(nextIndex));    //'div.card-(x+1)'
            const nextName=document.querySelector('.name-'+(nextIndex));
            const nextAuthor=document.querySelector('.author-'+(nextIndex));
            const nextpages=document.querySelector('.pages-'+(nextIndex));

            const nextStatus=document.querySelector('.status-'+(nextIndex));

            const nextRemove=document.querySelector('.remove-'+(nextIndex));
            











            nextCard.classList.remove('card-'+nextIndex);                   //div.card-(x+1)->div
            
            nextName.classList.remove('name-'+nextIndex);
            nextAuthor.classList.remove('author-'+nextIndex);
            nextpages.classList.remove('pages-'+nextIndex);



            nextStatus.classList.remove('status-'+nextIndex);
            if(nextStatus.classList[0]=='selected')
            {
                nextStatus.classList.remove('selected');
                isSelected=true;
            // console.log('contains selected');
            }


            nextRemove.classList.remove('remove-'+nextIndex);

            nextCard.classList.add('card-'+i)                               //div->div.card-x
            nextName.classList.add('name-'+i);
            nextAuthor.classList.add('author-'+i);
            nextpages.classList.add('pages-'+i);


            nextStatus.classList.add('status-'+i);
            if(isSelected==true){
            nextStatus.classList.add('selected');

            }


            nextRemove.classList.add('remove-'+i);

            nextCard.appendChild(nextName);
            nextCard.appendChild(nextAuthor);
            nextCard.appendChild(nextpages);
            nextCard.appendChild(nextStatus);
            nextCard.appendChild(nextRemove);

        }
        cardContainer.removeChild(currentCard);

    }
    else if(buttonClass.includes('status')){
        const changeIndex=e.target.classList[0].substr(7,buttonClass.length); //'x'
        // console.log('changeIndex '+changeIndex);
        const currentStatus=document.querySelector('.status-'+changeIndex);    //'.status-x'
        // console.log(currentStatus);

        if(e.target.classList[1]==undefined){
            currentStatus.classList.add('selected');
            myLibrary[changeIndex].readStatus='read';
            currentStatus.textContent='READ';
        }
        else {
            currentStatus.classList.remove('selected');
            myLibrary[changeIndex].readStatus='unread';

            currentStatus.textContent='UNREAD';

        }
    }

})


// addEventListener('keydown', (e) => {
//     if (e.key == 'c') {
//         console.log('created')

//         const card = document.createElement('div');
//         card.classList.add('card');
//         cardContainer.appendChild(card);
//     }
//     if (e.key == 'd') {
//         console.log('deleted')
//         cardContainer.removeChild(cardContainer.lastElementChild)
//     }
//     if (e.key == 'a') {
//         const card = document.createElement('div');

//         card.classList.add('card');
//         card.classList.add('add');

//         card.appendChild(cardAddButton);
//         cardAddButton.classList.add('card-icon');
//         cardContainer.appendChild(card);
//     }

// })


/*
    WHAT'S NEXT?
-Add myLibrary integration
-Target myLibrary values for the code to work properly.
-Reattach STAGE1 to the project with conditions
-
*/