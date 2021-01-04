const packageName = process.argv[2] ? process.argv[2] : "@andromeda/lya";
const PackageDependents = require("package-dependents");
const nameSet = new Set();

var counter = 0;

// Get package dependents
const getDep = (name) => {
  PackageDependents(name).then(packages => {
      packages.forEach(c => {
        console.log(c.name);
        // If the name has not appear again increase the counter
        if (!nameSet.has(c.name)){
          nameSet.add(c.name);
          counter++;
        }
        getDep(c.name);
    })
  })
}

getDep(packageName);

process.on('exit', () => {
  console.log("The total number of dep packages is:", counter)
});
