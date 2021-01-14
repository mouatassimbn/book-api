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
  const updatedIsbn = req.body.isbn || undefined;
  const updatedTitle = req.body.title || undefined;
  const updatedDescription = req.body.description || undefined;
  const updatedAuthor = req.body.author || undefined;

  Book.updateOne(
    { _id: bookId },
    {
      isbn: updatedIsbn,
      title: updatedTitle,
      description: updatedDescription,
      author: updatedAuthor,
    },
    { omitUndefined: true }
  )
    .then(() => {
      return Book.findById(bookId);
    })
    .then((book) => {
      res.status(200).json(book);
    })
    .catch((err) => console.log(err));
};

exports.destroy = (req, res, nxt) => {
  const bookId = req.params.id;

  Book.findByIdAndRemove(bookId)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => console.log(err));
};
