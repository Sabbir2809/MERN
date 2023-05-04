// Dependencies
const express = require('express');
const app = express();
const port = 3000;

// requests to the root URL (/) or route
app.get('/', (req, res) => {
  res.send('Hello Express JS');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
