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

    return db.collection("books").insertOne(this);
  }

  static fetchAll() {
    const db = getDb();

    return db
      .collection("books")
      .find()
      .toArray()
      .then((products) => {
        return products;
      });
  }

  static findById() {}

  static find() {}
}

module.exports = Book;
