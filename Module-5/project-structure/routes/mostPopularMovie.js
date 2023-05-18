const router = require('express').Router();
const { mostPopularMovie } = require('../controllers/mostPopularMovie');

router.get('/', mostPopularMovie);

module.exports = router;
