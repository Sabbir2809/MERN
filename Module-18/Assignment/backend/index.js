// Import File
const app = require("./app");
const connectDB = require("./src/config/db");

// PORT
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  // MongoDB Connection
  connectDB();
  console.log(`Server is Running at http://localhost:${PORT}`);
});
