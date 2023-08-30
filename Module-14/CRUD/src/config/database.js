// Dependencies
const mongoose = require("mongoose");

// Database Connection
const connectDB = async (options = {}) => {
  try {
    // connect
    await mongoose.connect(process.env.MONGODB_URI, options);
    console.log(`Successfully Connected to MongoDB...`);
    // event
    mongoose.connection.on("error", (error) => {
      console.error("Database Connection Error: ", error.message);
    });
  } catch (error) {
    console.error("Could Not Connect to MongoDB: ", error.message);
  }
};

// Exports
module.exports = connectDB;
