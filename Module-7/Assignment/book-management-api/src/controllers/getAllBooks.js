//@description: Retrieve all books
//@route: GET - /api/books
//@access: private

const bookModel = require('../models/bookModel');

exports.getAllBooks = async (req, res, next) => {
  try {
    const books = await bookModel.find({});

    res.status(200).json(books);
  } catch (error) {
    next(error);
  }
};
