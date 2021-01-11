const Book = require("../models/book");
const Book = require("../models/book");

exports.index = (req, res, nxt) => {
  Book.fetchAll()
    .then((books) => {
        res.json(books);
    })
    .catch((err) => console.log(err));
};

exports.show = (req, res, nxt) => {};

exports.store = (req, res, nxt) => {};

exports.update = (req, res, nxt) => {};

exports.destroy = (req, res, nxt) => {};
