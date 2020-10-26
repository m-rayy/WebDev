// Node does not support 'import'
// import largeNumber from './script_export';

// const a = largeNumber;


// Alternate method:
const script_export = require('./script_export.js');

const a = script_export.largeNumber;
const b = 0;

console.log(a+b);
