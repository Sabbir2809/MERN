// Dependencies
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const home = require('./routes/index');
const movie = require('./routes/movie');
const search = require('./routes/search');
require('dotenv').config();

// app instance of express()
const app = express();

// middleware(application level)
app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());

app.use((req, res, next) => {
  if (req.query.api_key != '12345') {
    res.status(401).json({ message: 'Invalid API Key' });
  } else {
    next();
  }
});

// routers: middleware
app.use('/', home);
app.use('/movie', movie);
app.use('/search', search);

const PORT = process.env.PORT || 4000;
app.listen(process.env.PORT, () => {
  console.log(`Server is Running Successfully at http://localhost:${PORT}`);
});
