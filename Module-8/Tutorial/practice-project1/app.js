// @Dependencies
const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const hpp = require('hpp');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const router = require('./src/routes/api');

// @Security Middleware
app.use(cors());
app.use(hpp());
app.use(helmet());
app.use(mongoSanitize());
const limiter = rateLimit({
  windowMs: 1 * 30 * 1000,
  max: 30,
});
app.use(limiter);

// @Application Level Middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// @Route
app.use('/api', router);

// @ERROR - client error handling
app.use('*', (req, res) => {
  res.status(404).json({
    message: 'Route Not Found!',
  });
});

module.exports = app;
