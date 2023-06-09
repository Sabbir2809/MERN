// Dependencies
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

// middleware
const auth = async (req, res, next) => {
  // Get the JWT token from the request headers
  const token = req.headers['authorization'].split('Bearer ')[1];

  try {
    const SECRET_KEY = 'tabbumaru';
    // Verify the JWT token
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).send('Unauthorized');
  }
};

// Route handler for GET request to '/protected'
app.get('/protected', auth, (req, res) => {
  res.send('Hello, ', req.user.username);
});

// Start the server
app.listen(8000, () => {
  console.log('Server started on port http://localhos:8000');
});
