//@description: Delete a book by ID
//@route: DELETE - /api/book/:id
//@access: private
exports.deleteBook = async (req, res, next) => {
  try {
    res.status(200).json({ message: 'Delete Book' });
  } catch (error) {
    next(error);
  }
};
