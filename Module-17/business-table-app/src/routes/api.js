// Dependencies
const express = require("express");
const { createProduct, getAllProducts } = require("../controllers/productController");
const router = express.Router();

// API Routing End Point
router.post("/create-products", createProduct);
router.get("/product-list/:pageNo/:prePage/:searchKeyword", getAllProducts);

// Exports
module.exports = router;
