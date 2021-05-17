var net = require('net');

// This hook is called each time we import a module
// and lets the developer have access to the source code
const sourceTransform = (info) => {
  const client = new net.Socket();
  let returnValue;
  
  client.connect(8000, 'localhost', function() {
	client.write(info);
  });

  client.on('data', function(data) {
	returnValue = data;
	client.destroy(); // kill client after server's response
  });

  client.on('close', function() {
	console.log(returnValue.toString());
  }); 
  return 'console.log("Send to docker")';
};

module.exports = (e) => {
//  env = e;
  return {
    sourceTransform: sourceTransform,
  };
};

