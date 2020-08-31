// condition ? expr1: expr2
function isUserValid(bool) {
    return bool;
}

var answer = isUserValid(false) ? "You may enter": "Access denied";

answer

var automatedAnswer =   
"Your Account is" + (isUserValid(true) ? " 1234": " not available");

automatedAnswer

// case
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a monster";
            break;
        case "back":
            whatHappens = "you arrived home";
            break;
        case "right":
            whatHappens = "you found a river";
            break;
        case "left":
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

console.log(moveCommand("forward"));
console.log(moveCommand("back"));
console.log(moveCommand("right"));
console.log(moveCommand("left"));
console.log(moveCommand());
