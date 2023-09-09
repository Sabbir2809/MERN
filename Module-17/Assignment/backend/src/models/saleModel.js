const mongoose = require("mongoose");

// Schema
const saleSchema = new mongoose.Schema(
  {
    department_id: { type: mongoose.Schema.Types.ObjectId, required: true },

    product: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    date: { type: Date, default: Date.now },
  },
  { timestamps: false, versionKey: false }
);

// model
const SaleModel = mongoose.model("Sales", saleSchema);
module.exports = SaleModel;
