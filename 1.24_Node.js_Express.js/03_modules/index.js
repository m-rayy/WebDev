// Method 1 - Node does not support 'import'
// import largeNumber from './script_export';

// const a = largeNumber;
// const a = script_export.largeNumber;
// const b = 0;

// console.log(a+b);


// Method 2 - Alternate method:
// const script_export = require('./script_export.js');

// const a = script_export.largeNumber;
// const b = 0;

// console.log(a+b);


// Method 3 - new ES6 support by latest Node version (>12):
// NB: rename file extension to .mjs OR
// Set "type": "module" in the package.json (create with "node init -y")
import { largeNumber } from './script_export.js';

const a = largeNumber;
const b = 0;

console.log(a+b);
