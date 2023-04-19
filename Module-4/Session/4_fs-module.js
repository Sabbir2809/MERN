const fs = require('fs');
const http = require('http');
const port = 4000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // Async
    fs.readFile('index.html', (error, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }
});

server.listen(port, () => {
  console.log(`Server is Running -> ${port}`);
});
