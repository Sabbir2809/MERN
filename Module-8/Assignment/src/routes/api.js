// Dependencies
const router = require('express').Router();
const allProducts = require('../controllers/allProducts');

router.get('/products', allProducts);

// exports
module.exports = router;
