// Dependencies
const router = require('express').Router();
const { allBooks } = require('../controllers/allBooks');
const { createBook } = require('../controllers/createBook');
const { deleteBook } = require('../controllers/deleteBook');
const { specificBook } = require('../controllers/specificBook');
const { updateBook } = require('../controllers/updateBook');

// Retrieve all books
router.get('/books', allBooks);
router.get('/book', specificBook);
router.post('/books', createBook);
router.put('/books', updateBook);
router.delete('/books', deleteBook);

// exports
module.exports = router;
