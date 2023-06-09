// Dependencies
const router = require('express').Router();
const { createProfile, userLogin } = require('../controllers/profileController');

router.post('/createProfile', createProfile);
router.post('/userLogin', userLogin);

// exports
module.exports = router;
