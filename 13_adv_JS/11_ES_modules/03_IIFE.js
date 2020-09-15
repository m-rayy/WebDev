// IIFE: Immediately-Invoked Function Expression

// first file loaded: 1.js
var myApp = {}

// second file loaded: 2.js
(function(){
    myApp.add = function(a, b) {
        return a + b;
    }
})();

// Reduces global namespace to 1: we expose only one object (myApp) to global scope
// Order of file imports (in html) are still important:

// <script type="text/javascript" src="./1.js"></script>
// <script type="text/javascript" src="./2.js"></script>

// More info here: https://medium.com/sungthecoder/javascript-module-module-loader-module-bundler-es6-module-confused-yet-6343510e7bde
