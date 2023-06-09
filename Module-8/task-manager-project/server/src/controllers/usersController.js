const usersModel = require('../models/usersModel');
const jwt = require('jsonwebtoken');

// @description: User Registration
// @route: POST - /api/v1/registration
// @access: public
exports.registration = async (req, res) => {
  const reqBody = req.body;

  try {
    const data = await usersModel.create(reqBody);
    res.status(200).json({
      status: 'Success',
      data: data,
    });
  } catch (error) {
    res.status(200).json({ status: 'Fail', error: error.toString() });
  }
};

// @description: User Login
// @route: POST - /api/v1/login
// @access: public
exports.login = async (req, res) => {
  const reqBody = req.body;

  try {
    const result = await usersModel.find(reqBody).count('total');

    if (result === 1) {
      const payload = {
        exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
        data: req.body['email'],
      };

      const token = jwt.sign(payload, process.env.SECRET_KEY);

      // token issue
      res.status(200).json({
        status: 'Success',
        data: token,
      });
    } else {
      res.status(200).json({
        status: 'Fail',
        data: token,
      });
    }
  } catch (error) {
    res.status(200).json({ status: 'Fail', error: error.toString() });
  }
};

// @description: Profile Details
// @route: POST - /api/v1/profileDetails
// @access: private
exports.profileDetails = async (req, res) => {
  const email = req.headers['email'];

  try {
    const profileDetails = await usersModel.find({ email });
    res.status(200).json({
      status: 'Success',
      data: profileDetails,
    });
  } catch (error) {
    res.status(200).json({ status: 'Fail', error: error.toString() });
  }
};
