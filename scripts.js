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

const libraries = []

booksForm.addEventListener('submit', (event) => {
    event.preventDefault()

   
   booksForm.style.display = 'none'

   const titleValue = bookTitle.value
   const authorValue = bookAuthor.value
   const pagesValue = bookPages.value
   const readValue = read.checked ? 'Yes!' : 'No!'

   function Book (title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
   }

   const newBook = new Book(titleValue, authorValue, pagesValue, readValue)

   libraries.push(newBook)

   const bookCard = document.createElement('div')

   bookCard.innerHTML = `Title: ${newBook.title} <br><br> Author: ${newBook.author} <br><br> Pages: ${newBook.pages} `
   

   bookCard.classList.add('book-card');

   booksList.appendChild(bookCard)

   const readStatus = document.createElement('span')
   readStatus.innerHTML =  `<br>Read:  ${newBook.read}`
   bookCard.appendChild(readStatus)

   const changeButton = document.createElement('button')
   changeButton.textContent = 'Change "Read" value'
   changeButton.classList.add('change-button')
   bookCard.appendChild(changeButton)

   changeButton.addEventListener('click', () => {
    if(newBook.read === 'Yes') {
        newBook.read = 'No'
    } else {
        newBook.read = 'Yes'
    }
    
    readStatus.innerHTML = `<br>Read: ${newBook.read}`;
   })


   const deleteButton = document.createElement('button')
   deleteButton.textContent = 'Delete'
   deleteButton.classList.add('delete-button')
   bookCard.appendChild(deleteButton)

   deleteButton.addEventListener('click', () => {
    bookCard.remove()
   })

   booksForm.reset()
})

