const { Schema, model } = require('mongoose');

// schema
const productSchema = Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// model
const Product = model('products', productSchema);

// exports
module.exports = Product;
