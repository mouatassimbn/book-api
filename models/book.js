const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  isbn: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Book", bookSchema);
