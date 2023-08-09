// Dependencies
const app = require('./app');
const connectDB = require('./src/config/database');

// Connect to MongoDB and Start Express Server
const port = process.env.PORT || 5000;
app.listen(port, async () => {
  await connectDB();
  console.log(`Server is Running at http://localhost:${port}`);
});
