const Book = require("../models/book");
const Book = require("../models/book");

exports.index = (req, res, nxt) => {
  Book.fetchAll()
    .then((books) => {
      res.status(200).json(books);
    })
    .catch((err) => console.log(err));
};

exports.show = (req, res, nxt) => {
  const bookId = req.params.id;

  const book = Book.findById(bookId)
    .then((book) => {
      res.status(200).json(book);
    })
    .catch((err) => console.log(err));
};

exports.store = (req, res, nxt) => {
  const isbn = req.body.isbn;
  const title = req.body.title;
  const description = req.body.description;
  const author = req.bodt.author;

  const book = new Book(isbn, title, author, description, null);

  book
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => console.log(err));
};

exports.update = (req, res, nxt) => {
  const bookId = req.params.id;
  const updatedIisbn = req.body.isbn;
  const updatedTitle = req.body.title;
  const updatedDescription = req.body.description;
  const updatedAuthor = req.bodt.author;

  const book = new Book(updatedIsbn,updatedTitle, updatedAuthor, updatedDescription, bookId);

  book.save()
  .then(result => {
      res.status(200).json();
  })
  .catch(err => console.log(err));
};

exports.destroy = (req, res, nxt) => {
  const bookId = req.body.id;

  Book.deleteById(bookId)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => console.log(err));
};
