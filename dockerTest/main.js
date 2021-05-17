const fs = require('fs');
try {
  let secret = fs.readFileSync('./secret.json').toString();
  secret = JSON.parse(secret)
  console.log(secret);
} catch(c) {
  console.log('Secret not found');
}
