// Question: Write a function named createServer that creates a simple HTTP server using the built-in http module. The server should listen on port 3000 and respond to all requests with a plain text response of "Hello, World!".

// Dependencies
const http = require('http');

// createSerer function
function createServer() {
  // create a server
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!\n');
  });

  server.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
}

// Call the function to create the server
createServer();
