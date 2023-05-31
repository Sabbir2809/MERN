//@description: Update a book by ID
//@route: PUT - /api/book/:id
//@access: private
exports.updateBook = async (req, res, next) => {
  res.status(200).json({ message: 'Update Book' });
  try {
  } catch (error) {
    next(error);
  }
};
