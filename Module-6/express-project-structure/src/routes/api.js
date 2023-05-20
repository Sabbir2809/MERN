// Dependencies
const express = require('express');
const { helloGet, helloPost } = require('../controllers/HelloController');
const router = express.Router();

// routes end point
router.get('/hello-get', helloGet);
router.post('/hello-post', helloPost);

// exports
module.exports = router;
