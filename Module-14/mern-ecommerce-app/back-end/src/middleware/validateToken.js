const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

exports.validateToken = async (req, res, next) => {
  try {
    let authHeader = req.headers.Authorization || req.headers.authorization;
    const decoded = jwt.verify(authHeader, process.env.SECRET_KEY);
    res.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ status: 'Fail', error: error.message });
  }
};

exports.isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);

    if (user.role !== 1) {
      return res.status(400).json({ message: 'Unauthorized' });
    } else {
      next();
    }
  } catch (error) {
    res.status(400).json({ status: 'Fail', error: error.message });
  }
};
