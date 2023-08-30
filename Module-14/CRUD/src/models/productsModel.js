// Dependencies
const mongoose = require("mongoose");

// Schema
const productsSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true },
    productCode: { type: String, unique: true, required: true },
    image: { type: String },
    unitPrice: { type: String, required: true },
    quantity: { type: String, required: true },
    totalPrice: { type: String },
  },
  { timestamps: true, versionKey: false }
);

// Model
const productsModel = mongoose.model("products", productsSchema);

// Export
module.exports = productsModel;
