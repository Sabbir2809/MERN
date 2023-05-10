// Dependencies
const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs/promises');
const shortid = require('shortid');

router.post('/', async (req, res) => {
  // user add book request body
  const book = {
    id: shortid.generate(),
    ...req.body,
  };
  // file location
  const location = path.resolve('data', 'books.json');
  // file read
  const data = await fs.readFile(location);
  // convert json to object
  const books = JSON.parse(data);
  // data/books.json push
  books.push(book);
  // write file
  await fs.writeFile(location, JSON.stringify(books));
  res.status(201).json(books);
});

// export
module.exports = router;
