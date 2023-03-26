const Book = require("../models/book");
 
const getBooks = (request, response) => {
  Book.find({})
    .then((book) => {
      response.status(200).send(book);
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};


const getBook = (request, response) => {
  const { book_id } = request.params;
  Book.findById(book_id)
    .then((book) => {
      response.status(200).send(book);
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};


const addBook = (request, response) => {
  const data = request.body;
  Book.create(data)
    .then((book) => {
      response.status(201).send(book);
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};


const updateBook = (request, response) => {
  const { book_id } = request.params;
  const data = request.body;
  Book.findByIdAndUpdate(book_id, data, { new: true, runValidators: true })
    .then((book) => {
      response.status(200).send(book);
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};


const deleteBook = (request, response) => {
  const { book_id } = request.params;
  Book.findByIdAndDelete(book_id)
    .then((book) => {
      response.status(200).send("Done");
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};

module.exports = {
  getBooks,
  getBook,
  addBook,
  updateBook,
  deleteBook,
};