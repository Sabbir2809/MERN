const ProfileModel = require('../models/profileModel');
const jwt = require('jsonwebtoken');

// @description: Create New Profile
// @route: POST - /api/v1/createProfile
// @access: public
exports.createProfile = async (req, res) => {
  const reqBody = req.body;

  try {
    const profile = await ProfileModel.create(reqBody);
    res.status(201).json({
      status: 'Success',
      data: profile,
    });
  } catch (error) {
    res.status(400).json({ status: 'Fail', error: error.toString() });
  }
};

// @description: User Login
// @route: POST - /api/v1/userLogin
// @access: public
exports.userLogin = async (req, res) => {
  const { userName, password } = req.body;

  try {
    const result = await ProfileModel.find({ userName, password }).count('total');

    if (result === 1) {
      const payload = {
        exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
        data: req.body['userName'],
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
    res.status(400).json({ status: 'Fail', error: error.toString() });
  }
};
