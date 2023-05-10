const express = require('express');
const path = require('path');
const fs = require('fs/promises');
const router = express.Router();

// when a GET request is made to the /books route
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
