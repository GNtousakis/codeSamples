function add(a, b) {
  console.log('Print');
  return a + b;
}

function sub(a, b) {
  console.log('Sub');
  return a - b;
}

function mult(a, b) {  
  for (var i=0; i<1000000000; i++) {
    var l = 1;
  }
  console.log('Mutl');
  return a * b;
}

module.exports = {
  add: add,
  sub: sub,
  mult: mult
}
