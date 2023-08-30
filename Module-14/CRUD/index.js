// Dependencies
const app = require("./app");
const connectDB = require("./src/config/database");

// Port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  connectDB(); // MongoDB Database Connection
  console.log(`Server is Running at http://localhost:${port}`);
});
