const { Schema, model } = require('mongoose');

// Schema
const OTPSchema = Schema(
  {
    email: {
      type: String,
    },
    otp: {
      type: String,
    },
    status: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true, versionKey: false }
);

// model
const OTPModel = model('otps', OTPSchema);

// exports
module.exports = OTPModel;
