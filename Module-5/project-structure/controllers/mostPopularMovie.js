const movies = require('../data/movies');

exports.mostPopularMovie = (req, res) => {
  let page = req.query.page;
  if (page == undefined) {
    page = 1;
  }

  let results = movies.filter((movie) => {
    return movie.most_popular === true;
  });

  const indexToStart = (page - 1) * 20;
  results = results.slice(indexToStart, indexToStart + 19);

  res.json({ page, results });
};
