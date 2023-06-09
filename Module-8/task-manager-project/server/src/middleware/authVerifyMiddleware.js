// // Dependencies
const jwt = require('jsonwebtoken');

exports.authVerify = async (req, res, next) => {
  const token = req.headers['token'];
  if (!token) {
    return res.status(401).json({ message: 'Invalid Token' });
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const email = decoded['data'];
    req.headers.email = email;
    next();
  } catch (error) {
    res.status(401).json({ status: 'Unauthorized', error: error.toString() });
  }
};

// const nodemailer = require('nodemailer');

// const sendEmailUtility = async (emailTo, emailText, emailSubject) => {
//   const transporter = nodemailer.createTransport({
//     host: 'mail.teamrabbil.com',
//     port: 25,
//     secure: false,
//     auth: {
//       user: 'info@teamrabbil.com',
//       pass: '~sR4{bhaC[Qs',
//     },
//     tls: {
//       rejectUnauthorized: false,
//     },
//   });

//   const mailOption = {
//     from: 'Task Manager<info@teamrabbil.com>',
//     to: emailTo,
//     subject: emailSubject,
//     text: emailText,
//   };
//   return await transporter.sendMail(mailOption);
// };

// // export
// module.exports = sendEmailUtility;
