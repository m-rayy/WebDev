// ES6 + Webpack2

// first file is loaded: 1.js
// Export multiple functions with method 1:
export const add = (a, b) => a + b;
// or export single function with method 2:
export default function add(a, b) {
    return a + b;
}

// second file is loaded: 2.js
// Call function exported with method 1:
import { add } from './1.js';

// Call function exported with method 2:
import add from './1.js';
