// Dependencies
const mongoose = require('mongoose');

// connection
const connectDB = async (options = { autoIndex: true }) => {
  try {
    await mongoose.connect(process.env.URI, options);
    console.log(`Successfully connected to MongoDB!`);

    // event
    mongoose.connection.on('error', (error) => {
      console.error('Database Connection Error: ', error.toString());
    });
  } catch (error) {
    console.error('Could Not Connect to MongoDB: ', error.toString());
  }
};

// exports
module.exports = connectDB;
