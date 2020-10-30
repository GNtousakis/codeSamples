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

module.exports = {
  add: add,
  sub: sub,
  mult: mult
}
