// Dependencies Library
const { Schema, model } = require('mongoose');

// Product Schema
const ProductSchema = Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  category: { type: String },
  createdAt: { type: Date, default: Date.now },
});

// Product Model
const Product = model('Product', ProductSchema);

// Export
module.exports = Product;
