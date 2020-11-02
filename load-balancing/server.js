#!/usr/bin/env node

const net = require('net');
const parse = require('@andromeda/utils').readFrom;
const stringify = require('@andromeda/utils').storeOn;
const port = process.argv[2] ?  process.argv[2] : 1238;
const math = require('./math.js');

const map = new Map();
map.set('./math.js', math);

const serialize = (msg) => {
  msg = parse(msg);
  const obj = map.get(msg.mod);
  const func = obj[msg.func];
  return func.call(this, ...msg.args);
}

const server = net.createServer(function(socket) {
  socket.on('data',function(data){   
    var newdata = data.toString();
    const result = serialize(newdata);
    socket.write(stringify(result));   
  });
});

server.listen(port,'localhost');

