function add(a, b) {
  setTimeout(() => {
    console.log("This is add"); 
    return a + b;
  });
}

function sub(a, b) {
  setTimeout(() => {
    console.log("This is sub"); 
    return a - b;
  });
}

function mult(a, b) {
  setTimeout(() => {
    console.log("This is mult"); 
    return a * b;
  }, 5000);
}

module.exports = {
  add: add,
  sub: sub,
  mult: mult
}
