// IIFE: Immediately Invoked Function Expression

// first file loaded: 1.js
var myApp = {}

// second file loaded: 2.js
(function(){
    myApp.add = function(a, b) {
        return a + b;
    }
})();

// Reduces global namespace to 1 (myApp)
// Order of file imports (in html) are still important
