// Dependencies
const express = require('express');
const router = express.Router();
const {
  createProduct,
  readProducts,
  updateProducts,
  deleteProduct,
} = require('../controllers/productsController');

// API Routing End Point:

// C = Create Operation
router.post('/create-product', createProduct);
// R = Read Operation
router.get('/read-products', readProducts);
// U = Update Operation
router.patch('/update-product/:id', updateProducts);
// D = Delete Operation
router.delete('/delete-product/:id', deleteProduct);

// Exports
module.exports = router;
