// CommonJS + Browserify

// first file is loaded: 1.js
module.exports = function add(a, b) {
    return a + b;
}

// second file is loaded: 2.js
var add = require('./1.js');

// A module bundler is used 
// Runs before syou put the website online
// Reads through all js files + syntax
// Everything is dumped into a automatically created file: Eg. bundle.js (see html)
