const app = require('./app');
const connectDB = require('./src/config/db');
const { serverPort } = require('./src/secret');

// PORT
app.listen(serverPort, () => {
  console.log(`Server is Running at http://localhost:${serverPort}`);
  // MongoDB Database Connection
  connectDB();
});
