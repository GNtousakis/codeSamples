function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mult(a, b) {  
  for (var i=0; i<1000000000; i++) {
    var l = 1;
  }
  return a * b;
}

async function addA (a, b, callback) {
  const result = await add(a, b);
  callback(result);  
}

async function subA (a, b, callback) {
  const result = await sub(a, b);
  callback(result);
}

async function multA (a, b, callback) {
  const result = await mult(a, b);
  callback(result);
}

module.exports = {
  add: add,
  sub: sub,
  mult: mult
}
