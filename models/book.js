const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;

class Book {
  constructor(isbn, title, author, description) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.description = description;
  }

  save() {
    const db = getDb();

    return db
      .collection("books")
      .insertOne(this)
      .catch((err) => console.log(err));
  }

  static fetchAll() {}

  static findById() {}

  static find() {}
}

module.exports = Book;
