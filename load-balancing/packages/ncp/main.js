var ncp = require('ncp').ncp;
var source = '../../../../Dropbox/';
var dest = './test/';
ncp.limit = 16;


ncp(source, dest, function (err) {
   if (err) {
        return console.error(err);
      }
   console.log('done!');
});
