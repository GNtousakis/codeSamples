const http = require('http');
const math = require('./math.js');

//create a server object:
// http.createServer(function (req, res) {
//   math.add(1, 2);
//   math.mult(3, 2);
//   math.sub(4, 2); 
//   res.end(); //end the response
// }).listen(8080); //the server object listens on port 8080 


const server = http.createServer((req, res) => {
  res.end();
});

server.on('request', (err, socket) => {
  math.add(1, 2);
  math.mult(3, 2);
  math.sub(4, 2); 
});
server.listen(8080);