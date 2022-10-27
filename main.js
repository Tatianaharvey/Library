let myLibrary = [];

class Book {
    constructor(title, author, pages, status) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.status = status;
    }
  }
 

function addBookToLibrary(title, author, pages, status) {
    const book = new Book(title, author, pages, status);
    myLibrary.push(book)
    showBooksInLibrary();
    // form.reset();
}


function showLibraryInfo() {
    const booksRead = document.querySelector('#books-read');
    const booksUnread = document.querySelector('#books-unread');
    const totalBooks = document.querySelector('#total-books');
    let readCounter = 0;
    let unreadCounter = 0;
    booksRead.textContent = 0;
    booksUnread.textContent = 0;
    for (let i = 0; i < myLibrary.length; i += 1) {
      if (myLibrary[i].status === true) {
        readCounter += 1;
        booksRead.textContent = readCounter;
      } else if (myLibrary[i].status === false) {
        unreadCounter += 1;
        booksUnread.textContent = unreadCounter;
      }
    }
    totalBooks.textContent = myLibrary.length;
  }


function showBooksInLibrary() {
    showLibraryInfo();
    const bookList = document.querySelector('#table-body');
    bookList.textContent = '';
    for (let i = 0; i < myLibrary.length; i += 1) {
        const bookRow = document.createElement('tr');
        bookRow.classList.add('book-info');
        bookList.appendChild(bookRow);
        
        const bookTitle = document.createElement('td');
        bookTitle.textContent = myLibrary[i].title;
        bookRow.appendChild(bookTitle);
        
        const bookAuthor = document.createElement('td');
        bookAuthor.textContent = myLibrary[i].author;
        bookRow.appendChild(bookAuthor);
        
        const bookPages = document.createElement('td');
        bookPages.textContent = myLibrary[i].pages;
        bookRow.appendChild(bookPages);

        const bookStatus = document.createElement('td');
        const statusSymbol = document.createElement('i');
        if (myLibrary[i].status === false) {
            statusSymbol.classList.add('fa-solid', 'fa-xmark');
          } else {
            statusSymbol.classList.add('fa-solid', 'fa-check');
          }
          bookStatus.appendChild(statusSymbol);
          bookRow.appendChild(bookStatus);

        const bookDelete = document.createElement('td');
        const deleteSymbol = document.createElement('i');
        deleteSymbol.classList.add('fa-solid', 'fa-trash');
        bookDelete.appendChild(deleteSymbol);
        bookRow.appendChild(bookDelete);
    }
}


function validateForm(event) {
    event.preventDefault();
    const form = document.querySelector('#form');
    const titleInput = document.querySelector('#title');
    const authorInput = document.querySelector('#author');
    const pagesInput = document.querySelector('#pages');
    const statusInput = document.querySelector('input[name="checkbox"]');
    
    if (titleInput.value !== '' && authorInput.value !== '' && pagesInput.value >= 0) {
        if(checkbox.checked) {
            addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, true);
        } else {
            addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, false);
        }
        form.reset();
    }
}

function listenClicks() {
    document.addEventListener('click', (event) => {
        const { target } = event;
        const tr = target.parentNode.parentNode.rowIndex - 1;
        if (target.id === 'add-book') {
            validateForm(event);
            form.reset();
        } else if (target.classList.contains('fa-trash')) {
            myLibrary.splice(tr, 1);
        } else if (target.classList.contains('fa-check')) {
            target.classList.remove('fa-check');
            target.classList.add('fa-xmark');
            myLibrary[tr].status = false;
        } else if (target.classList.contains('fa-xmark')) {
            target.classList.remove('fa-xmark');
            target.classList.add('fa-check');
            myLibrary[tr].status = true;
        }
        showBooksInLibrary();
    });
}

showBooksInLibrary();
listenClicks();




// Popup form 

const modal = document.querySelector(".modal");
const openForm = document.querySelector(".openForm");
const closeButton = document.querySelector(".close");
const addAndClose = document.querySelector('.add-book')

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

openForm.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
addAndClose.addEventListener("click", toggleModal);
