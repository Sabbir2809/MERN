const jwt = require('jsonwebtoken');

const generateToken = (userId, secretKey) => {
  // payload object
  const payload = {
    userId: userId,
  };
  // Generate the token with the payload and secret key
  const token = jwt.sign(payload, secretKey);
  return token;
};

module.exports = generateToken;
