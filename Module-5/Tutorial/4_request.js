// Dependencies
const express = require('express');
const app = express();
const port = 3000;

// 1. get request
app.get('/', (req, res) => {
  res.send('This is simple get() request');
});

// 2. get request with URL Query Params
app.get('/about', (req, res) => {
  // URL Query Params
  const firstName = req.query.firstName;
  const lastName = req.query.lastName;
  // headers
  const connection = req.header('Connection');

  res.send(`${firstName} ${lastName} -> ${connection}`);
});

// 3. post request
app.post('/post', (req, res) => {
  // URL Query Params
  const name = req.query.name;
  const age = req.query.age;

  // headers
  const contentLength = req.header('Content-Length');

  res.send(`${name} -> ${age} -> ${contentLength}`);
  // res.end(`This is simple post() request`);
});

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});
