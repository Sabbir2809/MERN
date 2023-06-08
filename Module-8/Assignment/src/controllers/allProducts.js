// Dependencies
const Product = require('../models/productModel');

const allProducts = async (req, res) => {
  try {
    const products = await Product.find({}, { _id: 0, name: 1, price: 1 });

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// exports
module.exports = allProducts;
