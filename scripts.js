const addButton = document.getElementById('add-button')
const booksForm = document.getElementById('books-form')
const bookTitle = document.getElementById('book-title')
const bookAuthor = document.getElementById('book-author')
const bookPages = document.getElementById('book-pages')
const booksList = document.querySelector('.book-list')
const read = document.getElementById('read')


addButton.addEventListener('click', () => {
    if(booksForm.style.display === 'none') {
       booksForm.style.display = 'flex'
    } else {
        booksForm.style.display = 'none'
    }
    })


class Book {
    _library = []
    constructor(title, author, pages, read) {
        this.title= title
        this.author = author
        this.pages = pages
        this.read = read
    }

    addBook(title, author, pages, read) {
        const book = new Book(title, author, pages, read)
        this._library.push(book)
    }

    removeBook(index) {
        this._library.splice(index, 1)
    }

    displayBooks() {
        booksList.innerHTML = ''
        this._library.forEach((book, index) => {

            const bookCard = document.createElement('div')
            bookCard.innerHTML = `Title: ${book.title} <br><br> Author: ${book.author} <br><br> Pages: ${book.pages}`
            bookCard.classList.add('book-card'); 
            booksList.appendChild(bookCard)

            const readStatus = document.createElement('span')
            readStatus.innerHTML =  `<br>Read:  ${book.read}`
            bookCard.appendChild(readStatus)

            const changeButton = document.createElement('button')
            changeButton.textContent = 'Change "Read" value'
            changeButton.classList.add('change-button')
            bookCard.appendChild(changeButton)
            changeButton.addEventListener('click', () => {
                book.read = book.read === 'Yes' ? 'No' : 'Yes'
                readStatus.innerHTML = `<br>Read: ${book.read}`
               })

            const deleteButton = document.createElement('button')
            deleteButton.textContent = 'Delete'
            deleteButton.classList.add('delete-button')
            bookCard.appendChild(deleteButton)
            deleteButton.addEventListener('click', () => {
                this.removeBook(index)
                this.displayBooks()
            })


        })
    }


}


const library = new Book()

booksForm.addEventListener('submit', (event) => {
    event.preventDefault()

    booksForm.style.display = 'none'

    const readValue = read.checked ? 'Yes' : 'No'

    library.addBook(bookTitle.value, bookAuthor.value, bookPages.value, readValue)

    library.displayBooks()

    bookTitle.value = '';
    bookAuthor.value = '';
    bookPages.value = '';
    read.value = '';

})