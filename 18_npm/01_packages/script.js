// Load function from node module (lodash) installed locally with npm:
var _ = require('lodash');
console.log(_);
var array = [1, 2, 3, 4, 5];
console.log(_.without(array, 3));
// re-bundle after every change!

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var textGradient = document.getElementById("textGradient")

function setGradient() {
    body.style.background = 
    "linear-gradient(to right, "
    + color1.value
    + " , "
    + color2.value
    + ")";

    css.textContent = body.style.background + ';';

    return css.textContent;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

textGradient.innerHTML = setGradient();