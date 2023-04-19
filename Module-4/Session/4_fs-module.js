const fs = require('fs');
const http = require('http');
const port = 5050;

const server = http.createServer((req, res) => {
  // :::::: 1. readFile() ::::::
  // if (req.url === '/') {
  //   fs.readFile('index.html', (error, data) => {
  //     res.writeHead(200, { 'Content-Type': 'text/html' });
  //     res.write(data);
  //     res.end();
  //   });
  // }
  // :::::: 1. readFileSync() ::::::
  // if (req.url === '/') {
  //   let data = fs.readFileSync('index.html');
  //   res.writeHead(200, { 'Context-Type': 'text/html' });
  //   res.write(data);
  //   res.end();
  // }
  // :::::: 2. writeFile() ::::::
  // if (req.url === '/') {
  //   fs.writeFile('test.txt', 'Hello, Node JS', (error) => {
  //     if (error) {
  //       res.writeHead(400, { 'Context-Type': 'text/html' });
  //       res.write('Something is Wrong');
  //       res.end();
  //     } else {
  //       res.writeHead(200, { 'Content-Type': 'text/html' });
  //       res.write('File Write Successfully...');
  //       res.end();
  //     }
  //   });
  // }
  // :::::: 2. writeFileSync() ::::::
  if (req.url === '/') {
    let error = fs.writeFileSync('demo.txt', 'Welcome, Node JS');

    if (error) {
      res.writeHead(400, { 'Context-Type': 'text/html' });
      res.write('Something is Wrong');
      res.end();
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write('File Write Successfully...');
      res.end();
    }
  }
});

server.listen(port, () => {
  console.log(`Server is Running -> ${port}`);
});
