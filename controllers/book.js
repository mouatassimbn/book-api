const Book = require("../models/book");

exports.index = (req, res, nxt) => {
  Book.find()
    .then((books) => {
      res.status(200).json(books);
    })
    .catch((err) => console.log(err));
};

exports.show = (req, res, nxt) => {
  const bookId = req.params.id;

  Book.findById(bookId)
    .then((book) => {
      res.status(200).json(book);
    })
    .catch((err) => console.log(err));
};

exports.store = (req, res, nxt) => {
  const isbn = req.body.isbn;
  const title = req.body.title;
  const description = req.body.description;
  const author = req.body.author;

  const book = new Book({ isbn, title, author, description });

  book
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => console.log(err));
};

exports.update = (req, res, nxt) => {
  const bookId = req.params.id;
  const updatedIsbn = req.body.isbn;
  const updatedTitle = req.body.title;
  const updatedDescription = req.body.description;
  const updatedAuthor = req.body.author;

  Book.findById(bookId)
    .then((book) => {
      book.title = updatedTitle;
      book.isbn = updatedIsbn;
      book.description = updatedDescription;
      book.author = updatedAuthor;

      return book.save();
    })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => console.log(err));
};

exports.destroy = (req, res, nxt) => {
  const bookId = req.body.id;

  Book.findByIdAndRemove(bookId)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => console.log(err));
};
