const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from Node backend!');
});

server.listen(3000, () => {
  console.log('Node app running on port 3000');
});
