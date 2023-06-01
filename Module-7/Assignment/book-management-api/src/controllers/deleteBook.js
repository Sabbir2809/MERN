//@description: Delete a book by ID
//@route: DELETE - /api/book/:id
//@access: private

const bookModel = require('../models/bookModel');

exports.deleteBook = async (req, res, next) => {
  try {
    const book = await bookModel.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ message: 'This ID Book Not Found!' });
    }
    await bookModel.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: `${req.params.id} Book Deleted Successfully` });
  } catch (error) {
    next(error);
  }
};
