// Dependencies
const { Schema, model } = require('mongoose');

// Schema
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'username is required'],
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'email is required'],
    },
    password: {
      type: String,
      required: [true, 'password is required'],
    },
  },
  { timestamps: true, versionKey: false }
);
// Model
const userModel = model('User', userSchema);

// Export
module.exports = userModel;
