const mongoose = require('mongoose');

const connectDB = async (options = {}) => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, options);
    console.log('Connect to MongoDB is Successfully');
    mongoose.connection.on('error', (error) => {
      console.error('Database Connection Error!', error);
    });
  } catch (error) {
    console.error('Could Not Connect to MongoDB', error.toString());
  }
};

module.exports = connectDB;
