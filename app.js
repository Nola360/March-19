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
      isbna: '3535535'
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


}

















// Store Class: Handles Storage

// Event Display

// Event: Add a Book

// Event: Remove a Book

