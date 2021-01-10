require("dotenv").config();
const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  const connectionString = process.env.CONNECTIONSTRING || null;
  if (!connectionString) {
    throw "[ERROR] : Database connection string empty...";
  }

  mongoClient
    .connect(connectionString)
    .then((client) => {
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "[ERROR] : No Database found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
