const router = require('express').Router();

const {
  getBooks,
  getBook,
  addBook,
  updateBook,
  deleteBook,
} = require("../controllers/books");

router.get("/", getBooks);
router.get("/:book_id", getBook);
router.post("/", addBook);
router.patch("/:book_id", updateBook);
router.delete("/:book_id", deleteBook);

module.exports = router;