// Dependencies
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const rateLimit = require('express-rate-limit');
const router = require('./src/routes/api');

// app instance
const app = express();

// security middleware
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());

// rate limit
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 60, // limit each IP to 60 requests per windowMS
});
app.use(limiter);

// middleware: route level
app.use('/api/v1', router);

// undefined route
app.use('*', (req, res) => {
  res.status(404).json({ status: 'Fail', data: 'Not Found' });
});

// exports
module.exports = app;
