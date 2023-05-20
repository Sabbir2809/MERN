// Dependencies
const app = require('./app');
require('dotenv').config();

// PORT Listen
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is Running at http://localhost:${PORT}`);
});
