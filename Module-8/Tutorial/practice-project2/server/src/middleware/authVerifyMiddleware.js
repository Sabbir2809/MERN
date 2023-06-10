const jwt = require('jsonwebtoken');

exports.authVerify = async (req, res, next) => {
  const token = req.headers['token'];

  if (!token) {
    return res.status(200).json({ status: 'Fail', message: 'Invalid Token' });
  }
  try {
    const decoded = await jwt.verify(token, process.env.SECRET_KEY);
    const userName = decoded['data'];
    req.headers.userName = userName;
    next();
  } catch (error) {
    res.status(401).json({ status: 'Unauthorized', error: error.toString() });
  }
};
