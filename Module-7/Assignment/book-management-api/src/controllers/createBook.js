//@description: Create a new book
//@route: POST  - /api/book
//@access: private
exports.createBook = async (req, res, next) => {
  try {
    res.status(201).json({ message: 'Create Book' });
  } catch (error) {
    next(error);
  }
};
