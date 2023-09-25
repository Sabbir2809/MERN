# Backend (Server Side)

1. Package.json is mandatory

```json
{
  "name": "backend",
  "version": "1.0.0",
  "description": "In this assignment, I have create a project structure with express js",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "keywords": ["backend", "nodeJs", "expressJs", "mongodb"],
  "author": "Sabbir Hossain",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.20.2",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "express-mongo-sanitize": "^2.2.0",
    "express-rate-limit": "^7.0.1",
    "helmet": "^7.0.0",
    "hpp": "^0.2.3",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^7.5.2",
    "multer": "^1.4.5-lts.1",
    "mysql": "^2.18.1",
    "nodemon": "^3.0.1",
    "validator": "^13.11.0"
  }
}
```

2. config.env is mandatory. There will be a variable named RUNNING_PORT. This variable should be used in your application.

```env
RUNNING_PORT=8000
MONGODB_URI=
```

3. You need to download some important MPM packages, they are: express, body-parser, cookie-parser, multer, jsonwebtoken, mysql, mongoose, dotenv, cors, express-mongo-sanitize, express-rate-limit, helmet, hpp, validator, nodemon

```npm
npm install express body-parser cookie-parser multer jsonwebtoken mysql mongoose dotenv cors express-mongo-sanitize express-rate-limit helmet hpp validator nodemon

```

4. Index.js should be mandatory. where your application will run. And listen port must be 8080.

```js
// Import File
const app = require("./app");
const connectDB = require("./src/config/db");

// PORT
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  // MongoDB Connection
  connectDB();
  console.log(`Server is Running at http://localhost:${PORT}`);
});
```

5. App.js is mandatory. where the configuration will hold. All security middleware must be used here.

```js
// Security Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
app.use(hpp());
app.use(mongoSanitize());
const limit = rateLimit({ windowMs: 1 * 60 * 1000, max: 30 });
app.use(limit);
```

6. An undefined route must be created where the response will have 404 status code.

```node
app.get("*", (req, res) => {
  res.status(404).json({ status: false, message: "Not Found" });
});
```

7. Make sure that node_modules and config.env files are not uploaded to Git.

```git
/node_modules
/.env
```

8. There should be a src folder. There will be five folders inside the folder Controllers, Helper, Middleware, Models, and Routes.

```cmd
mkdir controllers, helper, middleware, models, routers
```

9. There will be a total of 13 Controller files inside the Controllers folder. In order they are -

```file
touch userController.js, adminController.js, subAdminController.js, postController.js, customerController.js, categoryController.js, orderController.js, productController.js, order_itemController.js, paymentController.js, shipmentController.js, cartController.js, wishlistController.js
```

10. Each controller will have four function exports. They are respectively - create, read, delete, and update.

```js
For example:

exports.Create = async (req, res) => { };

exports.Read = async (req, res) => { };

exports.Delete = async (req, res) => { };

exports.Update = async (req, res) => { };

```

11. Each function of the controller should use res.status().json() method to pass some information. For example: res.status(200).json({status:“success”, data: “Can contain any information”})

```js
// create
exports.Create = async (req, res) => {
  try {
    res.status(201).json({
      status: true,
      data: "Create",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// read
exports.Read = async (req, res) => {
  try {
    res.status(201).json({
      status: true,
      data: "Read",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// update
exports.Update = async (req, res) => {
  try {
    res.status(201).json({
      status: true,
      data: "Delete",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// delete
exports.Delete = async (req, res) => {
  try {
    res.status(201).json({
      status: true,
      data: "Update",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
```

12. The Routes folder will contain the api.js file. And router path should be created in this file. Since there will be 13 controller files and each file will have 4 functions, a total of 52 router paths will be created. All APIs must be made through GET request.

```js
// ALL API ENDPOINTS:

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
```

13. The Helper, Middleware, and Models folders will contain a file called demo.txt.

```file
touch demo.txt
```

14. Create a database in mongodb and add it to your application. And provide some information to the console to check if it is connected.

```mongodb

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // MongoDB URI
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected Successfully`);
    //  MongoDB Error
    mongoose.connection.on("error", (error) => {
      console.error(`MongoDB Connection Error: ${error.message}`);
    });
  } catch (error) {
    console.error(`Could Not Connect to MongoDB: ${error.message}`);
  }
};

module.exports = connectDB;

```
