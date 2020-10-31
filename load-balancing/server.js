#!/usr/bin/env node

const net = require('net');
const parse = require('@andromeda/utils').readFrom;
const stringify = require('@andromeda/utils').storeOn;
const port = process.argv[2] ?  process.argv[2] : 1237;

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

server.listen(port,'localhost');


