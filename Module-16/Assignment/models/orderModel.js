const mongoose = require("mongoose");

// Schema
const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Users" },
    items: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Products" },
        quantity: { type: Number, min: 0 },
      },
    ],
    totalAmount: { type: Number, required: true, min: 0 },
    shippingAddress: { type: String, required: true, trim: true },
    status: { type: String, required: true, default: "Pending" },
  },
  { timestamps: true, versionKey: false }
);

// model
const OrderModel = mongoose.model("Orders", orderSchema);
module.exports = OrderModel;
