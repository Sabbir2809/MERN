const mongoose = require("mongoose");

// Schema
const productSchema = new mongoose.Schema(
  {
    id: { type: Number },
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    discountPercentage: { type: Number },
    rating: { type: Number },
    stock: { type: Number },
    category: { type: String },
    brand: { type: String },
    thumbnail: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

// model
const ProductModel = mongoose.model("Products", productSchema);

module.exports = ProductModel;
