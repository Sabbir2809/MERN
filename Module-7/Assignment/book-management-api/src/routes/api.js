// Dependencies
const router = require('express').Router();
const { allBooks } = require('../controllers/allBooks');

// Retrieve all books
router.get('/books', allBooks);

// exports
module.exports = router;
