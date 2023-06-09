// Dependencies
const express = require('express');
const app = express();
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');
const router = require('./src/routes/api');

// Security Middleware
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
const limiter = rateLimit({ windowMs: 1 * 60 * 1000, max: 30 });
app.use(limiter);

// Application Level Middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ urlencoded: true, extended: true, limit: '50mb' }));

// routes
app.use('/api/v1', router);

// undefine route
app.use('*', (req, res) => {
  res.status(404).json({ status: 'Fail', message: 'Route Not Found!' });
});

// exports
module.exports = app;
