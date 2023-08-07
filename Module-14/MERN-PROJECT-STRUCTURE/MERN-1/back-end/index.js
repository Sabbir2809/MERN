// Dependencies
const app = require('./app');
const connectDB = require('./src/config/database');

// PORT
const port = process.env.PORT || 5000;

app.listen(port, async () => {
  console.log(`Server is Running at http://localhost:${port}`);
  // MongoDB Database Connection
  await connectDB();
});
