/*
 * In the node.js intro tutorial (http://nodejs.org/), they show a basic tcp 
 * server, but for some reason omit a client connecting to it.  I added an 
 * example at the bottom.
 * Save the following server in example.js:
 * */

const net = require('net');
const parse = require('@andromeda/utils').readFrom;
const stringify = require('@andromeda/utils').storeOn;

let func;
let args;

const serialize = (stringFunc, stringArgs) => {
  const func = parse(stringFunc);
  const args = parse(stringArgs);
  console.log(func, args);
  return func.call(this, ...args);
}

const server = net.createServer(function(socket) {
  socket.on('data',function(data){   
    var newdata = data.toString();
    const split = newdata.split('@@div@@');
    const result = serialize(split[0], split[1]);
    socket.write(stringify(result));   
  });
});

server.listen(1337, '127.0.0.1');


