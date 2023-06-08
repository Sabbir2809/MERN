// Dependencies
const jwt = require('jsonwebtoken');

const authenticate = async (req, res, next) => {
  // Get the token from the request headers
  const token = req.headers.authorization;
  // Check if token exists
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    // Attach the decoded payload to the request object
    req.user = decoded;
    // Call the next middleware
    next();
  } catch (error) {
    // Return a 401 Unauthorized error if token is invalid
    return res.status(401).json({ error: 'Unauthorized' });
  }
};

// exports
module.exports = authenticate;
