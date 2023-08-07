// Dependencies
const app = require('./app');
// const connectDB = require('./src/config/database');

const port = process.env.PORT || 5000;

app.listen(port, async () => {
  console.log(`Server is Running at http://localhost:${port}`);
  // await connectDB();
});
