const app = require('./app');
const connectDB = require('./src/config/db');

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is Running at http://localhost:${port}`);
  connectDB();
});
