// Dependencies
const movieDetails = require('../data/movieDetails');

// get single movie
exports.getSingleMovie = (req, res) => {
  let page = req.query.page;
  if (!page) {
    page = 1;
  }
  let results = movieDetails.sort((a, b) => {
    return b.vote_average - a.vote_average;
  });
  const indexToStart = (page - 1) * 20;
  res.json(results.slice(indexToStart, indexToStart + 19));
};

// get top rated movie
exports.getTopRatedMovies = (req, res) => {
  const movieId = req.params.movieId;
  const results = movieDetails.find((movie) => {
    return movie.id == Number(movieId);
  });
  if (!results) {
    res.json({
      msg: 'Movie Id is not found',
    });
  } else {
    res.json(results);
  }
};

// post rating
exports.postMovieRating = (req, res) => {
  const movieId = req.params.movieId;
  const userRating = req.body.value;

  if (userRating < 0.5 || userRating > 10) {
    res.json({
      msg: 'Rating must be between 0.5 and 10',
    });
  } else {
    res.json({
      msg: 'Thank you for submitting your rating',
      status: 200,
    });
  }
};

// delete movie rating
exports.deleteMovieRating = (req, res) => {
  const movieId = req.params.movieId;
  res.json({ msg: 'Rating Deleted' });
};
