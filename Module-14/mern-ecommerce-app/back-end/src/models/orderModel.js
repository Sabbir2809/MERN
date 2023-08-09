const { Schema, model } = require('mongoose');

// Order Schema
const orderSchema = Schema(
  {
    products: [{ type: ObjectId, ref: 'Products' }],
    payment: {},
    buyer: { type: ObjectId, ref: 'Users' },
    status: {
      type: String,
      default: 'Not Processed',
      enum: ['Not processed', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
    },
  },
  { timestamps: true, versionKey: false }
);

// Order Model
const orderModel = model('Order', orderSchema);

module.exports = orderModel;
