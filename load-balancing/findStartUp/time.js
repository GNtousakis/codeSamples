function add(a, b) {
  setTimeout(() => {
    console.log("This is add"); 
    return a + b;
  });
}

function addasy(a, b) {
  console.log("This is add");
  return a + b;
}

module.exports = {
  add : add,
  addasy: addasy
}
