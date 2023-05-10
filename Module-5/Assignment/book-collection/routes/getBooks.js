// Dependencies
const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs/promises');

router.get('/', async (req, res) => {
  // file location
  const location = path.resolve('data', 'books.json');
  // file read
  const data = await fs.readFile(location);
  // convert json to object
  const books = JSON.parse(data);
  res.status(200).json(books);
});

// export
module.exports = router;
