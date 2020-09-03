// String padding
// .padStart(x): Total x spaces with trailing spaces at start
console.log('Turtle'.padStart(10));
// .padEnd(x): Total x spaces with trailing spaces at end
console.log('Turtle'.padEnd(10));


// Still valid despite ending comma (to optimise version controlling)
const fun = (a, b, c, d,) => {
    console.log(a);
}

fun(1, 2, 3, 4,);


// Object.values & Object.entries vs Object.keys
let obj = {
    username0: 'Santa',
    username1: 'Rudolf',
    username2: 'Mr.Grinch'
}
// Old method:
Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
})
// New method:
Object.values(obj).forEach(value => {
    console.log(value);
})
Object.entries(obj).forEach(entry => {
    console.log(entry);
})
// Can map over these methods:
Object.entries(obj).map(entry => {
    // return name + username index
    console.log(entry[1] + entry[0].replace('username', ''));
})

// Async await -> introduced in section titled How Javascript Works as well as in the HTTP + AJAX + JSON + Asynchronous Javascript section.


// Exercise8
// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢'.padStart(8);
let rabbit = '🐇'.padStart(8);

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// .trim() trims whitespace
turtle = turtle.trim()
console.log(turtle);
// What does the second parameter in padEnd and padStart do?
// Specifies trailing character (default = space)
turtle = turtle.padEnd(9, '=');
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #3) Get the below object to go from:
let obj2 = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

console.log(
    Object.entries(obj2).map(value => value.join(' ')).join(' ')
);
