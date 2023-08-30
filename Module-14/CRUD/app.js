// Dependencies
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const hpp = require("hpp");
const mongoSanitize = require("express-mongo-sanitize");
const rateLimit = require("express-rate-limit");
const path = require("path");
const router = require("./src/routes/api");

// express app
const app = express();

// Security Middleware Implement
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(mongoSanitize());
const limiter = rateLimit({ windowMs: 1 * 60 * 1000, max: 30 });
app.use(limiter);

// Application Level Middleware Implement
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.static("frontend/dist"));

// health route
app.get("/", (req, res) => {
  res.send("API, All is Well");
});

// Managing Back-End API Routing
app.use("/api/v1", router);

// React Front-End Tagging
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});

// Exports
module.exports = app;
