const app = require('./app');
require('dotenv').config();

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is Running at http://localhost:${port}`);
});
