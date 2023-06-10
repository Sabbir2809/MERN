const ProfileModel = require('../models/profileModel');
const jwt = require('jsonwebtoken');

// @description: Create New Profile
// @route: POST - /api/v1/create-profile
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
// @route: POST - /api/v1/user-login
// @access: public
exports.userLogin = async (req, res) => {
  const { userName, password } = req.body;

  try {
    const result = await ProfileModel.find({ userName, password }).count('total');

    //
    if (result === 1) {
      const payload = {
        exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
        data: userName,
      };

      const token = jwt.sign(payload, process.env.SECRET_KEY);

      // token issue
      res.status(200).json({
        status: 'Success',
        data: token,
      });
    } else {
      res.status(401).json({
        status: 'Fail',
        message: 'Unauthorized Access',
      });
    }
  } catch (error) {
    res.status(400).json({ status: 'Fail', error: error.toString() });
  }
};

// @description: User Profile
// @route: POST - /api/v1/userLogin
// @access: private
exports.userProfile = async (req, res) => {
  let userName = req.headers['userName'];
  try {
    const profile = await ProfileModel.find({ userName });
    res.status(200).json({
      status: 'Success',
      data: profile,
    });
  } catch (error) {
    res.status(400).json({ status: 'Fail', error: error.toString() });
  }
};

// @description: User Profile
// @route: POST - /api/v1/userLogin
// @access: private
exports.updateProfile = async (req, res) => {
  let userName = req.headers['userName'];
  let updateProfile = req.body;
  try {
    await ProfileModel.updateOne({ userName }, { $set: updateProfile }, { upsert: true });
    res.status(200).json({
      status: 'Success',
      data: updateProfile,
    });
  } catch (error) {
    res.status(400).json({ status: 'Fail', error: error.toString() });
  }
};
