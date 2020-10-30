const http = require('http');

var options = {
    host: 'localhost',
    port: 8080,
    method: 'GET',
};

const request = (i) => {
  for (var number=1; number < i+1; number++){
    setTimeout(function(){
      var x = http.request(options);
      x.end();
    }, 1000*i);
  }
}

for (var i=1; i<100; i++){
    request(i);
}

