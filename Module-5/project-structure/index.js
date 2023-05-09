// Dependencies
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const home = require('./routes/home');
const main = require('./routes/main');
require('dotenv').config();

// call
const app = express();

// middleware(application level)
app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());

// router  middleware
app.use('/', home);

app.use('/main', main);

// PORT
app.listen(process.env.PORT, () => {
  console.log(`Server is running http://localhost:${process.env.PORT}`);
});
