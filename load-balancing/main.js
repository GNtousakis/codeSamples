const http = require('http');
const math = require('./math.js');

const server = http.createServer((req, res) => {
  res.end();
});

server.on('request', (err, socket) => {
  math.add(1, 2, console.log);
  math.mult(3, 2, console.log);
  math.sub(4, 2, console.log); 
});
server.listen(8080);
