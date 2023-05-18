// Dependencies
const router = require('express').Router();
const {
  getSingleMovie,
  getTopRatedMovies,
  postMovieRating,
  deleteMovieRating,
} = require('../controllers/movies');
const { requiredJSON } = require('../middleware/requiredJSON');

// GET/movie/:movieId
// GET/movie/top-rated
// POST/movie/:movie_id/rating
// DELETE/movie/:movie_id/rating

router.get('/top-rated', getSingleMovie);

router.get('/:movieId', getTopRatedMovies);

router.post('/:movieId', requiredJSON, postMovieRating);

router.delete('/:movieId/rating', requiredJSON, deleteMovieRating);

// export
module.exports = router;
