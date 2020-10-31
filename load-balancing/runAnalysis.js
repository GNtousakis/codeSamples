const lya = require('../../lya/src/core.js');
let conf = {
  print: true,
  analysis: require.resolve('./load_balancing.js'),
  ports: [1237, 1238],
};
lya.configRequire(require, conf);
require("./main.js");
