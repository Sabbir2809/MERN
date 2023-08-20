// Dependencies
const express = require("express");
const { register, login } = require("../controllers/userController");
const { createProduct, getAllProducts } = require("../controllers/productController");
const router = express.Router();

// API Routing End Point:

// @User Authentication: register, login
router.post("/auth/user-register", register);
router.get("/auth/user-login", login);

// @Product: createProduct, getAllProducts
router.post("/product/create-product", createProduct);
router.get("/product/get-products", getAllProducts);

// Exports
module.exports = router;
