const { Schema, model } = require('mongoose');

// Category Schema
const categorySchema = Schema(
  {
    name: { type: String, trim: true, required: true, unique: true },
    slug: { type: String, unique: true, lowercase: true },
  },
  { timestamps: true, versionKey: false }
);

// Category Model
const categoryModel = model('Categories', categorySchema);

module.exports = categoryModel;
