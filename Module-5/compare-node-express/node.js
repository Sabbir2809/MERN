// Dependencies
const http = require('http');

// Object - Module Scaffolding
const app = {
  port: 3000,
};

// create server
const server = http.createServer((req, res) => {
  // check
  if (req.url === '/') {
    res.write('This is Home Page...');
    res.end();
  } else if (req.url === '/project' && req.method === 'GET') {
    res.write('This is Project Page with GET Request...');
    res.end();
  } else {
    res.write('Not Found 404');
    res.end();
  }
});

server.listen(app.port, () => {
  console.log(`Listening on port ${app.port}`);
});
