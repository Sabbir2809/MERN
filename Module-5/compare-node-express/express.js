// Dependencies
const express = require('express');
const PORT = 300;

// app object
const app = express();

// get
app.get('/', (req, res) => {
  res.send('This is Home Page');
});

// post
app.post('/', (req, res) => {
  res.send('This is Home page with post request');
});

// PORT
app.listen(PORT, () => {
  console.log('Listening on port 3000');
});
