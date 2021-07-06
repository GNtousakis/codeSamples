const lodash = require('lodash');

let x = {y : 'test', z: 'test2'};
let y = lodash.cloneDeep(x);
y.y = 1;

let global2 = lodash.cloneDeepWith(console.log);
console.log(x, y, global2)
