const { Schema, model } = require('mongoose');

// User Schema
const userSchema = Schema(
  {
    name: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true, unique: true },
    password: {
      type: String,
      required: true,
      minLength: [4, 'Password should contain at least 4 characters'],
    },
    address: { type: String, trim: true },
    role: { type: Number, default: 0 },
  },
  { timestamps: true, versionKey: false }
);

// User Model
const userModel = model('Users', userSchema);

module.exports = userModel;
