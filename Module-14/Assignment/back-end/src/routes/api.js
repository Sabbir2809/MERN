// Dependencies
const express = require('express');
const { getAllUsers, register, login } = require('../controllers/userController');
const router = express.Router();

// API Routing End Point:

// @User Router
router.get('/user/all-users', getAllUsers);
router.post('/user/register', register);
router.post('/user/login', login);

// Exports
module.exports = router;
