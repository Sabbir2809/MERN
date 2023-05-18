// Dependencies
const router = require('express').Router();
const { searchMovies, searchPerson } = require('../controllers/searchMovies');
const { requiredQuery } = require('../middleware/requiredQuery');

// middleware
// router.use(requiredQuery);

// GET/search/movie
router.get('/movie', searchMovies);

// GET/search/person
router.get('/person', searchPerson);

// export
module.exports = router;
