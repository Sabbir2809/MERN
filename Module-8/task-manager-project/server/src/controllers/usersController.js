const OTPModel = require('../models/OTPModel');
const usersModel = require('../models/usersModel');
const jwt = require('jsonwebtoken');
const { sendEmailWithNodeMailer } = require('../utility/sendEmailUtility');

// @description: User Registration
// @route: POST - /api/v1/registration
// @access: public
exports.registration = async (req, res) => {
  try {
    const reqBody = req.body;
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
  try {
    const reqBody = req.body;
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
      res.status(401).json({
        status: 'Fail',
        message: 'Unauthorized Access',
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
  try {
    const email = req.headers['email'];
    const profileDetails = await usersModel.find({ email });
    res.status(200).json({
      status: 'Success',
      data: profileDetails,
    });
  } catch (error) {
    res.status(200).json({ status: 'Fail', error: error.toString() });
  }
};

// @description: Send OTP
// @route: POST - /api/v1/send-otp
// @access: public
exports.sendOTP = async (req, res) => {
  let email = req.params.email;
  let OTPCode = Math.floor(100000 + Math.random() * 900000);

  await OTPModel.create({ email: email, otp: OTPCode }); // Database Insert

  // prepare email
  const emailData = {
    email,
    subject: 'Task Manager',
    html: `
      <h2>PIN CODE: ${OTPCode}</h2>
    `,
  };

  // send email with nodemailer
  try {
    await sendEmailWithNodeMailer(emailData);
    res.status(201).json({ status: 'Success', Data: `Please go to your ${email} . System send OTP` });
  } catch (error) {
    res.status(200).json({ status: 'fail', Error: error.message });
  }
};

// @description: Verify OPT
// @route: POST - /api/v1/verify-otp
// @access: public
exports.verifyOTP = async (req, res) => {
  try {
    let email = req.params.email;
    let otp = req.params.otp;

    let result = await OTPModel.find({ email: email, otp: otp, status: 0 }).count('total');

    if (result === 1) {
      await OTPModel.updateOne({ email: email, otp: otp, status: 0 }, { status: 1 });

      res.status(200).json({
        status: 'Success',
        data: 'Verification Success',
      });
    } else {
      res.status(200).json({ status: 'OPT Used', error: 'Already Used Exist.' });
    }
  } catch (error) {
    res.status(200).json({ status: 'Fail', error: error.message });
  }
};
