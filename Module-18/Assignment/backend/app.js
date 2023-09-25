// Dependencies
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const hpp = require("hpp");
const mongoSanitize = require("express-mongo-sanitize");
const rateLimit = require("express-rate-limit");
require("dotenv").config();
const router = require("./src/routes/api");

// app
const app = express();

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

// Router
app.use("/api/v1", router);

// Undefined Route
app.get("*", (req, res) => {
  res.status(404).json({ status: false, message: "Not Found" });
});

// Exports app
module.exports = app;
