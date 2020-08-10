const fs = require('fs');
const path = require('path');

const file = fs.readFileSync(path.resolve(__dirname, 'lodash'), 'utf8');

const regex = /```js(\s*.*)*``/g;
const code = file.match(regex);
