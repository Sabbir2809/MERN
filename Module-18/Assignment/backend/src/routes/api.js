const express = require("express");
const router = express.Router();
// import controllers
const userController = require("../controllers/userController");
const customerController = require("../controllers/customerController");
const categoryController = require("../controllers/categoryController");
const productController = require("../controllers/productController");
const cartController = require("../controllers/cartController");
const wishlistController = require("../controllers/wishlistController");
const order_itemController = require("../controllers/order_itemController");
const orderController = require("../controllers/orderController");
const paymentController = require("../controllers/paymentController");
const shipmentController = require("../controllers/shipmentController");
const adminController = require("../controllers/adminController");
const subAdminController = require("../controllers/subAdminController");
const postController = require("../controllers/postController");

// API ENDPOINTS

router.get("/user-create", userController.Create);
router.get("/user-read", userController.Read);
router.get("/user-update", userController.Update);
router.get("/user-delete", userController.Delete);

router.get("/customer-create", customerController.Create);
router.get("/customer-read", customerController.Read);
router.get("/customer-update", customerController.Update);
router.get("/customer-delete", customerController.Delete);

router.get("/category-create", categoryController.Create);
router.get("/category-read", categoryController.Read);
router.get("/category-update", categoryController.Update);
router.get("/category-delete", categoryController.Delete);

router.get("/product-create", productController.Create);
router.get("/product-read", productController.Read);
router.get("/product-update", productController.Update);
router.get("/product-delete", productController.Delete);

router.get("/cart-create", cartController.Create);
router.get("/cart-read", cartController.Read);
router.get("/cart-update", cartController.Update);
router.get("/cart-delete", cartController.Delete);

router.get("/wishlist-create", wishlistController.Create);
router.get("/wishlist-read", wishlistController.Read);
router.get("/wishlist-update", wishlistController.Update);
router.get("/wishlist-delete", wishlistController.Delete);

router.get("/order_item-create", order_itemController.Create);
router.get("/order_item-read", order_itemController.Read);
router.get("/order_item-update", order_itemController.Update);
router.get("/order_item-delete", order_itemController.Delete);

router.get("/order-create", orderController.Create);
router.get("/order-read", orderController.Read);
router.get("/order-update", orderController.Update);
router.get("/order-delete", orderController.Delete);

router.get("/payment-create", paymentController.Create);
router.get("/payment-read", paymentController.Read);
router.get("/payment-update", paymentController.Update);
router.get("/payment-delete", paymentController.Delete);

router.get("/shipment-create", shipmentController.Create);
router.get("/shipment-read", shipmentController.Read);
router.get("/shipment-update", shipmentController.Update);
router.get("/shipment-delete", shipmentController.Delete);

router.get("/admin-create", adminController.Create);
router.get("/admin-read", adminController.Read);
router.get("/admin-update", adminController.Update);
router.get("/admin-delete", adminController.Delete);

router.get("/subAdmin-create", subAdminController.Create);
router.get("/subAdmin-read", subAdminController.Read);
router.get("/subAdmin-update", subAdminController.Update);
router.get("/subAdmin-delete", subAdminController.Delete);

router.get("/post-create", postController.Create);
router.get("/post-read", postController.Read);
router.get("/post-update", postController.Update);
router.get("/post-delete", postController.Delete);

// router exports
module.exports = router;
