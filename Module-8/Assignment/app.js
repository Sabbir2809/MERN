const express = require('express');
const app = express();
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');
require('dotenv').config();
const router = require('./src/routes/api');
const generateToken = require('./src/controllers/generateToken');
const authenticate = require('./src/middleware/authenticate');

// Security Middleware
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Rate Limiting
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 30, // limit each IP to 30 requests per windowMS
});
app.use(limiter);

// Route
app.use('/api', router);

// authenticate
app.get('/auth', authenticate, (req, res) => {
  const userId = req.user.userId;
  res.send(`Authenticated user ID: ${userId}`);
});

// generate a token
const token = generateToken('user123', process.env.SECRET_KEY);
console.log(`Generate Token: ${token}`);

// ERROR - client error handling
app.use('*', (req, res) => {
  res.status(404).json({ status: 'Fail', message: 'Router Not Found!' });
});

// exports
module.exports = app;
