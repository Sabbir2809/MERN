//@description: Retrieve all books
//@route: GET - /api/books
//@access: private
const allBooks = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

//@description: Retrieve a specific book by ID
//@route: GET - /api/books
//@access: private
const specificBook = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

//@description: Create a new book
//@route: POST  - /api/books
//@access: private
const createBook = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

//@description: Update a book by ID
//@route: PUT - /api/books/:id
//@access: private
const updateBook = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

//@description: Delete a book by ID
//@route: DELETE - /api/books/:id
//@access: private
const deleteBook = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

module.exports = {
  allBooks,
  specificBook,
  createBook,
  updateBook,
  deleteBook,
};
