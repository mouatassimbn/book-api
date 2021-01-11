const Book = require("../models/book");
const Book = require("../models/book");

exports.index = (req, res, nxt) => {
  Book.fetchAll()
    .then((books) => {
      res.json(books);
    })
    .catch((err) => console.log(err));
};

exports.show = (req, res, nxt) => {
  const bookId = req.params.id;

  const book = Book.findById(bookId)
    .then((book) => {
      res.json(book);
    })
    .catch((err) => console.log(err));
};

exports.store = (req, res, nxt) => {};

exports.update = (req, res, nxt) => {};

exports.destroy = (req, res, nxt) => {};
