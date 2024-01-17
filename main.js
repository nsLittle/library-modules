// write your code here to make the tests pass
const Library = function () {
  let books = [];
  let addBook = function (book) {
    books.push(book);
  };
  let checkOutBook = function (book) {
    if (books.includes(book)) {
    book.setAttribute("checkedOut", true)
    };
  };
  let returnBook = function (book) {
    book.setAttribute("checkedOut", false)
  };
  return {
    addBook: addBook,
    checkOutBook: checkOutBook,
    returnBook: returnBook
  };
};

const Book = function () {
  let attributes = {
    checkedOut: false
  };
  let getAttribute = function (property) {
    return attributes[property];
  };
  let setAttribute = function (property, value) {
    attributes[property] = value;
  };
  return {
    getAttribute: getAttribute,
    setAttribute: setAttribute
  }
};