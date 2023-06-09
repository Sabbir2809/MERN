// Dependencies
const { Schema, model } = require('mongoose');

// Schema
const profileSchema = Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
    },
    userName: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    emailAddress: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
    mobileNumber: {
      type: String,
      unique: true,
    },
    city: {
      type: String,
    },
  },

  { timestamps: true, versionKey: false }
);

// model
const ProfileModel = model('profile', profileSchema);

// exports
module.exports = ProfileModel;
