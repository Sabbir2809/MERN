// Dependencies
const app = require('./app');
const connectDB = require('./src/config/db');

// PORT
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is Running at http://localhost:${port}`);
  // MongoDB Database Connection
  connectDB();
});
