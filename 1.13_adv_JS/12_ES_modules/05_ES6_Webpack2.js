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


// Since Webpack is JavaScript command line tool, you will need NodeJS and NPM installed.
// Once you have NPM installed, initialize project:
// $ mkdir project; cd project
// $ npm init -y
// $ npm install -D webpack webpack-dev-server

// You need a configuration file for webpack.
// At a bare minimum, you will need entry and output field for your configuration.
// Save following content in webpack.config.js file:
module.exports = {
    entry: './app/main.js',
    output: {
        path: './dist',
        filename: 'bundle.js'
    }
}

// And open your ‘package.json’ file and add following lines under ‘script’ field.
"scripts": {
    "start": "webpack-dev-server -progress -colors",
    "build": "webpack"
 }

 // Now add all your JavaScript modules under ‘project/app’ directory and ‘index.html’ under ‘project’ directory .

// Once you have all the files ready, you can run your application.
// $ npm start

// And open your browser and point url to http://localhost:8080/webpack-dev-server/

// For deployment, You may want to create a bundled file. You can create ‘bundle.js’ file with following command.
// $ npm run build

// More info here: https://medium.com/sungthecoder/javascript-module-module-loader-module-bundler-es6-module-confused-yet-6343510e7bde
