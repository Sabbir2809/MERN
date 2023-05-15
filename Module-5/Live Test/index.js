// Dependencies
const express = require('express');
// app instance of express()
const app = express();

// middleware
app.use(express.json());

// A route that responds to GET requests to the root URL (/) with the message "Hello, World!".
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// A route that responds to GET requests to the /users URL with a JSON response that contains an array of user objects. Each user object should have a name property and an age property.
app.get('/users', (req, res) => {
  const users = [
    {
      name: 'Sabbir Hossain',
      age: 24,
    },
    {
      name: 'Abu Salkin',
      age: 23,
    },
  ];
  res.json(users);
});

// PORT
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is Running Successfully at http://localhost:${PORT}`);
});
