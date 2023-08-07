// Dependencies
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const hpp = require('hpp');
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');
const router = require('./src/routes/api');

// Security Middleware Implement
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(mongoSanitize());
const limiter = rateLimit({ windowMs: 1 * 60 * 1000, max: 30 });
app.use(limiter);

// Application Level Middleware Implement
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ urlencoded: true, extended: true, limit: '50mb' }));

// Front-End Tagging
app.use(express.static('frontend/dist'));
app.get('*', (req, res) => {
  req.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
});

// Managing Back-End API Routing
app.use('/api/v1', router);

// Exports
module.exports = app;
