// Dependencies
const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const hpp = require('hpp');
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');
const createError = require('http-errors');
const router = require('./routes/api');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(mongoSanitize());
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 30, // limit each IP to 30 requests per windowMS
});
app.use(limiter);

// routes
app.use('/api', router);

// undefined route
app.use('*', (req, res) => {
  res.status(404).json({
    status: 'Fail',
    data: 'Not Found',
  });
});

// ERROR - client error handling
app.use((req, res, next) => {
  next(createError(404, 'Route Not Found!'));
});

// ERROR - server error handling
app.use((err, req, res, next) => {
  res.status(err.status || 5000).json({
    success: false,
    message: err.message,
  });
});

// exports
module.exports = app;
