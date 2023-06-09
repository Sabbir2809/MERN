// Dependencies
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

// Route handler for GET request to '/protected'
app.get('/protected', (req, res) => {
  // Get the JWT token from the request headers
  const token = req.headers.authorization;
  // Check if the token exists
  if (!token) {
    return res.status(401).json({ error: '❌ No token provided!' });
  }

  try {
    const SECRET_KEY = 'tabbumaru';
    // Verify the JWT token
    const decoded = jwt.verify(token, SECRET_KEY);
    console.log(decoded);

    res.json({ message: '✅ Protected route accessed successfully' });
  } catch (err) {
    // Token verification failed
    res.status(401).json({ error: 'Invalid token' });
  }
});

// Start the server
app.listen(8000, () => {
  console.log('Server is Running');
});
