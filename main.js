const addBook = document.getElementById('add-book')

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
}


 

function validateForm(event) {
    event.preventDefault();
    const form = document.querySelector('form');
    const titleInput = document.querySelector('#title')
    const titleError = document.querySelector('.title')
    const authorInput = document.querySelector('#author')
    const authorError = document.querySelector('.author')
    const pagesInput = document.querySelector('#pages')
    const pagesError = document.querySelector('.pages')
    const checkbox = document.querySelector('input[name="checkbox"]')

    if (titleInput.value === '') {
        titleError.style.display = 'block';
    } else {
        titleError.style.display = 'none';
    }

    if (authorInput.value === '') {
        authorError.style.display = 'block';
    } else {
        authorError.style.display = 'none';
    }

    if (pagesInput.value === '' || pagesInput.value.match(/[^1-9]/) || pagesInput.value <= 0) {
        pagesError.style.display = 'block';
    } else {
        pagesError.style.display = 'none';
    }

    if (titleInput.value !== '' && authorInput.value !== '' && pagesInput.value !== '' && pagesInput.value > 0) {
        if (checkbox) {
            addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, true);
        } else {
            addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, false);
        }
        form.reset();
    }
}

function showBooksInLibrary() {
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
  }
}

function listenClicks() {
    document.addEventListener('click', (event) => {
        
        const { target } = event;
        const tr = target.parentNode.parentNode.rowIndex - 1;
        if (target.id === 'add-book') {
        validateForm(event);
        console.log(myLibrary)
        } else {

        }
        showBooksInLibrary();
    })
}

showBooksInLibrary();
listenClicks();

console.log(listenClicks)
console.log(showBooksInLibrary)


// Popup form 

const modal = document.querySelector(".modal");
const openForm = document.querySelector(".openForm");
const closeButton = document.querySelector(".close");

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