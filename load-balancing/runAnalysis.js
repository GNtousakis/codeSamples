#!/usr/bin/env node

const file = process.argv[2] ?  process.argv[2] : './main.js';
const lya = require('./lya/src/core.js');
let conf = {
  print: true,
  analysis: require.resolve('./load_balancing.js'),
};
lya.configRequire(require, conf);
require(file);
