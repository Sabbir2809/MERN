const movies = require('../data/movies');
const people = require('../data/people');

exports.searchMovies = (req, res) => {
  const searchTerm = req.query;
  console.log(searchTerm);
  const results = movies.filter((movie) => {
    let found = movie.overview.includes(searchTerm) || movie.title.includes(searchTerm);

    return found;
  });

  res.json({ results });
};

//
exports.searchPerson = (req, res) => {
  const searchTerm = req.query;
  const results = people.filter((person) => {
    let found = person.name.includes(searchTerm);
    return found;
  });

  res.json({ results });
};
