const { Schema, model } = require('mongoose');

// Product Schema
const productSchema = Schema(
  {
    name: { type: String, trim: true, required: true },
    slug: { type: String, lowercase: true },
    description: { type: {}, required: true, maxLength: 300 },
    price: { type: Number, trim: true, required: true },
    category: { type: ObjectId, ref: 'Categories', required: true },
    quantity: { type: Number },
    soId: { type: Number, default: 0 },
    photo: { data: Buffer, contentType: String },
    shipping: { type: Boolean, required: false },
  },
  { timestamps: true, versionKey: false }
);

// Product Model
const productModel = model('Products', productSchema);

module.exports = productModel;
