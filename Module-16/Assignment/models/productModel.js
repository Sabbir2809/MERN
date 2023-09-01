const mongoose = require("mongoose");

// Schema
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    price: { type: Number, required: true, min: 0 },
    stock: { type: Number, required: true, min: 0 },
    category: { type: Number, required: true, required: true },
    imageURL: { type: String, trim: true },
  },
  { timestamps: true, versionKey: false }
);

// model
const ProductModel = mongoose.model("Products", productSchema);
module.exports = ProductModel;
