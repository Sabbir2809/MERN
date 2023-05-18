// Dependencies
const router = require('express').Router();
const { baseURL } = require('../controllers');

router.get('/', baseURL);

module.exports = router;
