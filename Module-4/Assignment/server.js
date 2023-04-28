/**
 * Title: Building a Simple File Server
 * Description: In this assignment, you will build a simple file server using Node.js, the built-in fs module, and the built-in http module. Your file server should listen on port 3000 and serve files from a public directory.
 * Author: Md. Sabbir Hossain
 * Date: 28/04/2023
 */

// Dependencies (Core Module)
const http = require('http');
const fs = require('fs');

// PORT
const PORT = 3000;

// Create Server
const server = http.createServer((req, res) => {
  // show function: repeated work
  const show = (statusCode, data) => {
    res.writeHead(statusCode, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
  };

  // check req.url equal to root path(/)
  if (req.url === '/') {
    fs.readFile('./public/home.html', (error, data) => {
      if (error) {
        show(400, '<h1>Something is Error in home.html</h1>');
      } else {
        show(200, data);
      }
    });
  }
  // check req.url equal to path(/main)
  else if (req.url === '/main') {
    fs.readFile('./public/main.html', (error, data) => {
      if (error) {
        show(400, '<h1>Something is Error in main.html</h1>');
      } else {
        show(200, data);
      }
    });
  }
  // check req.url equal to path(/footer)
  else if (req.url === '/footer') {
    fs.readFile('./public/footer.html', (error, data) => {
      if (error) {
        show(400, '<h1>Something is Wrong in footer.html</h1>');
      } else {
        show(200, data);
      }
    });
  }
  // 404 Not Found
  else {
    show(404, '<h1>404 Not Found</h1>');
  }
});

// server listen port
server.listen(PORT, () => {
  console.log(`Server is Running on -> http://localhost:${PORT}`);
});
