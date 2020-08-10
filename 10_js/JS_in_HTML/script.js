4+3;

if (4+3 === 7) {
    alert("You're smart!");
}

function sayHello() {
    console.log("Helloooo!!!");
}

sayHello();

console.log("How you doin?", "*wink*");

var sayBye = function byebye() {
    console.log("Byeeee!!!");
}

sayBye();

function sing(lyrics) {
    console.log(lyrics);
}

sing('I am the highway...');
sing('YeaaaaaAHHH');

function multiply(a, b) {
    if (a > 10 || b > 10) {
        return "that's too hard"
    } else {
        return "a * b: " + (a * b);
    }
}

console.log(multiply(5, 10))