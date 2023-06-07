const { Schema, model } = require('mongoose');

const usersSchema = Schema(
  {
    email: {
      type: String,
      unique: true,
    },
    title: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false }
);

const usersModel = model('users', usersSchema);

module.exports = usersModel;
