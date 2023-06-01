//@description: Create a new book
//@route: POST  - /api/book

const bookModel = require('../models/bookModel');

//@access: private
exports.createBook = async (req, res, next) => {
  try {
    const { title, author } = req.body;

    if (!title || !author) {
      return res.status(400).json({ message: 'All Fields are Required!' });
    }
    // inserting new book
    const book = await bookModel.create(req.body);

    // successful response
    res.status(201).json(book);
  } catch (error) {
    next(error);
  }
};
