// Load function from node module (lodash) installed locally with npm:
var _ = require('lodash');
console.log(_);

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
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

textGradient.innerHTML = setGradient()[0];

// BONUS: Add a random button which generates two random numbers for the colour inputs.