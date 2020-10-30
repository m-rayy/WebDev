const fs = require('fs');

function question1() {
    fs.readFile('./input.txt', (err, data) => {
        console.time('question1');
        
        const directions = data.toString();
        const directionsArray = directions.split('');

        const answer = directionsArray.reduce((acc, currentValue) => {
            if (currentValue === '(') {
                return acc += 1;
            } else if (currentValue === ')') {
                return acc -= 1;
            }
        },0)
        
        console.timeEnd('question1');
        console.log('Final floor:', answer);
    })
}


function question2() {
    fs.readFile('./input.txt', (err, data) => {
        console.time('question2');
        
        const directions = data.toString();
        const directionsArray = directions.split('');
        
        let accumulator = 0
        let counter = 0
        
        // Use .some to stop when condition is met:
        const answer = directionsArray.some((currentItem) => {
            if (currentItem === '(') {
                accumulator ++;
            } else if (currentItem === ')') {
                accumulator --;
            }
            counter ++;
            return accumulator < 0;
        })
        
        console.timeEnd('question2');
        console.log('Basement entered at:', counter)
    })
}

// Execute
question1()
question2()