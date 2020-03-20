// Book Class: Represents a Book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}








// UI: Handle UI Tasks
class UI {
  static displayBooks() {
    const StoredBooks = [{
      title: 'Book One',
      author: 'Jane Doe',
      isbn: '353556'
    },
    {
      title: 'Book Two',
      author: 'James Doe',
      isbn: '234567'
    }]

    const books = StoredBooks;

    // Loops and calls method that can be created
    books.forEach((book) => UI.addBookToList(book));

  }



  // Created Method
  static addBookToList(book) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');

    row.innerHTML =
      `<td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;

    list.appendChild(row);
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static showAlert(message, className) {

    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message))

    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);
  }





  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }


}








// Store Class: Handles Storage

















// Event Display Books

document.addEventListener('DOMContentLoaded', UI.displayBooks);
















// Event: Add a Book

document.querySelector('#book-form').addEventListener('submit', (e) => {

  // Prevent default action
  e.preventDefault()

  // Get form Value
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;


  // Form Validation
  if (title === '' || author === '' || isbn === '') {
    alert('Please fill in fields');
  } else {

    // Instantiate a book
    const book = new Book(title, author, isbn);
  }




  // Add Book to UI
  UI.addBookToList(book);

  // Clear fields
  UI.clearFields()
  console.log(book);





})
















// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
})
