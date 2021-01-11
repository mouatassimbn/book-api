const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;

class Book {
  constructor(isbn, title, author, description, id) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.description = description;
    this._id = id;
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

  static findById(bookId) {
    const db = getDb();

    return db
      .collection("books")
      .findOne({ _id: new mongodb.ObjectId(bookId) });
  }

  static find() {}
}

module.exports = Book;
