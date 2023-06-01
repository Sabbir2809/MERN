//@description: Retrieve a specific book by ID
//@route: GET - /api/book
//@access: private
const bookModel = require('../models/bookModel');

exports.getSpecificBook = async (req, res, next) => {
  try {
    const book = await bookModel.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ message: 'This ID Book Not Found!' });
    }
    res.status(200).json(book);
  } catch (error) {
    next(error);
  }
};
