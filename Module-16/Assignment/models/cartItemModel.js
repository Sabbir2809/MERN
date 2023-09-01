const mongoose = require("mongoose");

// Schema
const cartItemSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Products", required: true },
    quantity: { type: Number, required: true, min: 0 },
  },
  { timestamps: true, versionKey: false }
);

// model
const CartItemModel = mongoose.model("CartItems", cartItemSchema);
module.exports = CartItemModel;
