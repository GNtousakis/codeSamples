const lya = require('../../lya/src/core.js');
let conf = {
  print: true,
  analysis: require.resolve('./load_balancing.js'),
};
lya.configRequire(require, conf);
require("./main.js");
