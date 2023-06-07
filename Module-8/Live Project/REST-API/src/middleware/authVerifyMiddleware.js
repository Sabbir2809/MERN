const nodemailer = require('nodemailer');

const sendEmailUtility = async (emailTo, emailText, emailSubject) => {
  const transporter = nodemailer.createTransport({
    host: 'mail.teamrabbil.com',
    port: 25,
    secure: false,
    auth: {
      user: 'info@teamrabbil.com',
      pass: '~sR4{bhaC[Qs',
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOption = {
    from: 'Task Manager<info@teamrabbil.com>',
    to: emailTo,
    subject: emailSubject,
    text: emailText,
  };
  return await transporter.sendMail(mailOption);
};

module.exports = sendEmailUtility;
