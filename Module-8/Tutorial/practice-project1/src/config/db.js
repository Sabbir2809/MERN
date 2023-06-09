const mongoose = require('mongoose');

const connectDB = async (options = {}) => {
  try {
    await mongoose.connect(process.env.URI, options);
    console.log('Successfully connected to MongoDB!');

    mongoose.connection.on('error', (error) => {
      console.error('Database Connection Error: ', error.toString());
    });
  } catch (error) {
    console.error('Could Not Connect to MongoDB: ', error.toString());
  }
};

module.exports = connectDB;
