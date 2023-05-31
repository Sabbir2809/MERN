// Dependencies
const app = require('./app');
require('dotenv').config();

// PORT
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is Running on http://localhost:${port}`);
});
