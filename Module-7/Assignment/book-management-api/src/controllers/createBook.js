//@description: Create a new book
//@route: POST  - /api/book

const bookModel = require('../models/bookModel');

//@access: private
exports.createBook = async (req, res, next) => {
  try {
    // inserting new book
    const book = await bookModel.create(req.body);

    // successful response
    res.status(201).json(book);
  } catch (error) {
    next(error);
  }
};
