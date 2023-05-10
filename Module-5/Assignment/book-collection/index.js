// Dependencies
const express = require('express');
const path = require('path');
const fs = require('fs/promises');
const getBooks = require('./routes/getBooks');
const addBook = require('./routes/addBook');

// app is an instance of express
const app = express();

// Middleware
app.use(express.static('public'));
app.use(express.json());

// when a GET request is made to the root route
app.get('/', (req, res) => {
  res.sendFile('index.html');
});

// when a GET request is made to the /books route
app.use('/books', getBooks);

// user to add a book to the collection when a POST request is made to the /books route
app.use('/books', addBook);

// user to delete a book from the collection when a DELETE request is made to the /books/:id route
app.delete('/books/:id', async (req, res) => {
  // which book id delete
  const id = req.params.id;
  // file location
  const location = path.resolve('data', 'books.json');
  // file read the location
  const data = await fs.readFile(location);
  // convert json to object
  const books = JSON.parse(data);

  // find a single book by id
  let book = books.find((item) => item.id === id);

  // check book not found
  if (!book) {
    return res.status(404).json({ message: 'Book Not Found' });
  }
  // filter
  const newBooks = books.filter((item) => item.id !== id);
  // write file
  await fs.writeFile(location, JSON.stringify(newBooks));
  res.status(202).json({ message: `Book successfully deleted` });
});

// PORT
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is Running at http://localhost:${PORT}`);
});
