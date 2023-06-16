// Dependencies
const mongoose = require('mongoose');
const { mongodbURL } = require('../secret');

// connection
const connectDB = async (options = { autoIndex: true }) => {
  try {
    await mongoose.connect(mongodbURL, options);
    console.log(`Successfully connected to MongoDB!`);

    // event
    mongoose.connection.on('error', (error) => {
      console.error('Database Connection Error: ', error.message);
    });
  } catch (error) {
    console.error('Could Not Connect to MongoDB: ', error.message);
  }
};

// exports
module.exports = connectDB;
