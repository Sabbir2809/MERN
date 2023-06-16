// Dependencies
require('dotenv').config();

// Secret Key
const serverPort = process.env.SERVER_PORT || 8080;
const mongodbURL = process.env.MONGODB_ATLAS_URL;
const smtpUsername = process.env.SMTP_USERNAME;
const smtpPassword = process.env.SMTP_PASSWORD;

// exports
module.exports = {
  serverPort,
  mongodbURL,
  smtpUsername,
  smtpPassword,
};
