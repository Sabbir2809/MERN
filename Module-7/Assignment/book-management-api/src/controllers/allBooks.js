//@description: Retrieve all books
//@route: GET - /api/books
//@access: private
exports.allBooks = async (req, res, next) => {
  try {
    res.status(200).json({ message: 'All Books' });
  } catch (error) {
    next(error);
  }
};
