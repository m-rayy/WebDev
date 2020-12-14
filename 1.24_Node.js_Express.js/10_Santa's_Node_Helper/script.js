// Pre-reading: https://www.freecodecamp.org/news/how-to-think-like-a-programmer-lessons-in-problem-solving-d1d8bf1de7d2/
// Challenge: https://adventofcode.com/2015/day/1

// Part 1:
// Santa is trying to deliver presents in a large apartment building, but he can't find the right floor - the directions he got are a little confusing.
// He starts on the ground floor (floor 0) and then follows the instructions one character at a time.
// An opening parenthesis, (, means he should go up one floor, and a closing parenthesis, ), means he should go down one floor.
// The apartment building is very tall, and the basement is very deep; he will never find the top or bottom floors.

// For example:
// (()) and ()() both result in floor 0.
// ((( and (()(()( both result in floor 3.
// ))((((( also results in floor 3.
// ()) and ))( both result in floor -1 (the first basement level).
// ))) and )())()) both result in floor -3.

// Q1: To what floor do the instructions in input.txt take Santa?

// --- Part Two ---
// Now, given the same instructions, find the position of the first character that causes him to enter the basement (floor -1).
// The first character in the instructions has position 1, the second character has position 2, and so on.

// For example:
// ) causes him to enter the basement at character position 1.
// ()()) causes him to enter the basement at character position 5.

// Q2: What is the position of the character that causes Santa to first enter the basement?

const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
    // Error handling
    if (err) {
        console.log(err);
    }
    
    // Log start time
    console.time('fun_challenge');
    
    // Read instructions
    const instructions = data.toString();    

    // Set floor
    var floor = 0;
    var position = [];
    // Finding: var is faster than let -> TODO: confirm

    // Navigate function
    const navigate = (instruction) => {
        if (instruction === '(') {
            floor ++;
        } else if (instruction === ')') {           
            floor --;
        } else {
            // Exception handling
            throw 'Unknown instruction received!'
        }
    };

    // Check position function
    const log_entrance_to_basement = (index, floor) => {
        if (floor === -1) {
            position.push(index+1);
        }
    }

    // iterate with index and value through string
    for (let i = 0; i < instructions.length; i ++) {
        navigate(instructions[i]);
        log_entrance_to_basement(i, floor);
    }

    // Log results
    console.timeEnd('fun_challenge');
    console.log('Santa is on floor', floor, 'and first enters floor -1 is on position', position[0]);
})

// For more (past) ZtM challenges: https://zerotomastery.io/community/events/
