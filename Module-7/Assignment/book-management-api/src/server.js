// Dependencies
const app = require('./app');
const connectDB = require('./config/db');
require('dotenv').config();

// PORT
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is Running on http://localhost:${port}`);
  connectDB();
});
