// Dependencies
const { Schema, model } = require('mongoose');

// Schema
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    min: 18,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
});

// Model
const User = model('User', userSchema);

// Exports
module.exports = User;
