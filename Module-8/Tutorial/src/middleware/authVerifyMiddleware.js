const jwt = require('jsonwebtoken');

exports.authVerify = async (req, res, next) => {
  const token = req.headers.token;

  if (!token) {
    return res.status(401).json({ message: 'Invalid Token' });
  }

  try {
    await jwt.verify(token, process.env.SECRET_KEY);

    next();
  } catch (error) {
    res.status(401).json({
      status: 'Unauthorized',
      error: error.toString(),
    });
  }
};
