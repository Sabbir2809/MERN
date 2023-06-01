//@description: Update a book by ID
//@route: PUT - /api/book/:id
//@access: private
const bookModel = require('../models/bookModel');

exports.updateBook = async (req, res, next) => {
  const book = await bookModel.findById(req.params.id);

  if (!book) {
    return res.status(404).json({ message: 'This ID Book Not Found!' });
  }

  const updatedBook = await bookModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).json(updatedBook);
  try {
  } catch (error) {
    next(error);
  }
};
