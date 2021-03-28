const npmPackageStars = require('npm-package-stars');
 
npmPackageStars('commit-msg').then(stars => {
    console.log(stars);
    //=> 329
});
