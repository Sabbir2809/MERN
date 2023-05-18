// Dependencies
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();
const baseURL = require('./routes/index');
const mostPopularMovie = require('./routes/mostPopularMovie');
const movies = require('./routes/movies');
const searchMovies = require('./routes/searchMovies');
const { auth } = require('./middleware/auth');

// app instance of express()
const app = express();

// middleware(application level)
app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(auth);

// routers: middleware
app.use('/', baseURL);
app.use('/most-popular', mostPopularMovie);
app.use('/movies', movies);
app.use('/search', searchMovies);

// PORT
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is Running Successfully at http://localhost:${PORT}`);
});
