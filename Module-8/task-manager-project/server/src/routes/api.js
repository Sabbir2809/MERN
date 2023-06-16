// Dependencies
const router = require('express').Router();
const { registration, login, profileDetails, verifyOTP, sendOTP } = require('../controllers/usersController');
const { authVerify } = require('../middleware/authVerifyMiddleware');

// Before Login
router.post('/registration', registration);
router.post('/login', login);
router.get('/send-otp/:email', sendOTP);
router.get('/verify-otp/:email/:otp', verifyOTP);

// After Login
router.get('/profile-details', authVerify, profileDetails);

// export
module.exports = router;
