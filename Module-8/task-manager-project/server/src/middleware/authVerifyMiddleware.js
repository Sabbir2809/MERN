// // Dependencies
const jwt = require('jsonwebtoken');

exports.authVerify = async (req, res, next) => {
  try {
    const token = req.headers['token'];
    if (!token) {
      return res.status(401).json({ status: 'Fail', message: 'Invalid Token' });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const email = decoded['data'];
    req.headers.email = email;
    next();
  } catch (error) {
    res.status(401).json({ status: 'Unauthorized', error: error.toString() });
  }
};
