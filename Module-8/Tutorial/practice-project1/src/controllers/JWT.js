const jwt = require('jsonwebtoken');

exports.encodedToken = async (req, res) => {
  const payload = {
    exp: Math.floor(Date.now() / 1000) + 1 * 60,
    data: {
      name: 'Sabbir Hossain',
      admin: true,
    },
  };
  try {
    const token = await jwt.sign(payload, process.env.SECRET_KEY);
    res.send(token);
  } catch (error) {
    res.status(404).json({
      status: 'Not Found',
      error: error.toString(),
    });
  }
};

exports.decodedToken = async (req, res) => {
  const token = req.headers.token;

  if (!token) {
    return res.status(401).json({ message: 'Invalid Token' });
  }

  try {
    const decoded = await jwt.verify(token, process.env.SECRET_KEY);
    res.status(200).json({
      message: 'Success',
      data: decoded,
    });
  } catch (error) {
    res.status(401).json({
      status: 'Unauthorized',
      error: error.toString(),
    });
  }
};
