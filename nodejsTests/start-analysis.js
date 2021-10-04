#!/usr/bin/env node

let program = process.argv[2] ? process.argv[2] : 'main.js';
let lya = require('/home/gntousakis/lya/src/core.js');

let conf = {
  analysis: lya.preset.RWX_AST,
  debug: true,
  context: {
    excludes: ['Promise', 'toString', 'escape', 'setImmediate'],
  },
  printResults: true,
};
lya.configRequire(require, conf);
module.exports = require(program);
