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
    let dbOp;
    if (this._id) {
      dbOp = db.collection("books").updateOne(
        { _id: new mongodb.ObjectId(this._id) },
        {
          $set: {
            isbn: this.isbn,
            title: this.title,
            description: this.description,
            author: this.author,
          },
        }
      );
    } else {
      dbOp = db.collection("books").insertOne(this);
    }

    return dbOp.then((result) => {
      return result.ops ? result.ops[0] : { status: "Updated successfuly..." };
    });
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

  static deleteById(bookId) {
    const db = getDb();

    return db
      .collection("books")
      .deleteOne({ _id: new mongodb.ObjectId(bookId) })
      .then((result) => {
        return result.ops ? result.ops[0] : { status: "Deleted successfuly..." };
      });
  }
}

module.exports = Book;
