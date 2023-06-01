// Dependencies
const router = require('express').Router();
const { createBook } = require('../controllers/createBook');
const { deleteBook } = require('../controllers/deleteBook');
const { getAllBooks } = require('../controllers/getAllBooks');
const { getSpecificBook } = require('../controllers/getSpecificBook');
const { updateBook } = require('../controllers/updateBook');

router.get('/books', getAllBooks);
router.get('/books/:id', getSpecificBook);
router.post('/books', createBook);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);

// exports
module.exports = router;
