// Dependencies
const express = require("express");
const { register, login } = require("../controllers/userController");
const { createProduct, getAllProducts } = require("../controllers/productController");
const { createCart, getAllCartList, deleteCart } = require("../controllers/cartController");
const { authVerify } = require("../middleware/authVerifyMiddleware");
const router = express.Router();

// API Routing End Point:

// @User Authentication API: register, login
router.post("/auth/user-register", register);
router.get("/auth/user-login", login);

// @Product API: createProduct, getAllProducts
router.post("/create-product", authVerify, createProduct);
router.get("/products", authVerify, getAllProducts);

// @Cart API: createCar, getAllCartList, deleteCart
router.post("/create-cart", authVerify, createCart);
router.post("/cart-list", authVerify, getAllCartList);
router.delete("/delete-cart/:id", authVerify, deleteCart);

// Exports
module.exports = router;
