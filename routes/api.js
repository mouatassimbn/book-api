const express = require("express");

const bookController = require("../controllers/book");

const router = express.Router();

// api/books => GET
router.get("/books", bookController.index);

// api/book/:id => GET
router.get("/book/:id", bookController.show);

// api/book => POST
router.post("/book", bookController.store);

// api/book => PUT
router.put("/book/:id", bookController.update);

// api/book => DELETE
router.delete("/book/:id", bookController.destroy);

module.exports = router;
