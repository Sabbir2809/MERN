const { Schema, model } = require('mongoose');

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'User Name is Required'],
      trim: true,
    },
    author: {
      type: String,
      required: [true, 'Author Name is Required'],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    publishedYear: {
      type: Number,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const bookModel = model('Books', bookSchema);

module.exports = bookModel;
