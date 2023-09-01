const mongoose = require("mongoose");

// Schema
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true, min: 0 },
    stock: { type: Number, required: true, min: 0 },
    category: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

// model
const Product = mongoose.model("Products", productSchema);
module.exports = Product;
