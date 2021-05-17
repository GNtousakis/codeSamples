const lya = require('@andromeda/lya');
const conf = {
  analysis: require.resolve('./dockerize/toDocker.js'),
}
lya.configRequire(require, conf);
require('./main.js');
