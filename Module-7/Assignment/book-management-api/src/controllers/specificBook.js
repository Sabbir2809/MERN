//@description: Retrieve a specific book by ID
//@route: GET - /api/book
//@access: private
exports.specificBook = async (req, res, next) => {
  try {
    res.status(200).json({ message: 'Specific Book' });
  } catch (error) {
    next(error);
  }
};
