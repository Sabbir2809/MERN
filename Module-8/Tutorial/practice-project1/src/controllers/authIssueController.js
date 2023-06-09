const jwt = require('jsonwebtoken');

exports.authIssue = async (req, res) => {
  const payload = {
    exp: Math.floor(Date.now() / 1000) + 30 * 60,
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
