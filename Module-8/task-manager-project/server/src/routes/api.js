// Dependencies
const router = require('express').Router();
const { registration, login, profileDetails } = require('../controllers/usersController');
const { authVerify } = require('../middleware/authVerifyMiddleware');

// Before Login
router.post('/registration', registration);
router.post('/login', login);

// After Login
router.get('/profile-details', authVerify, profileDetails);

// export
module.exports = router;
