const fs = require('fs');
const { features } = require('process');

// Aysnchronous:
fs.readFile('./hello.txt', (err, data) => {
    if (err) {
        console.log('Error :(');
    }
    // No encoding:
    // console.log(data);
    // Encoded (UTF8 by default):
    console.log('readFile:', data.toString());
})

// Synchronous:
const file = fs.readFileSync('./hello.txt');
console.log('readFileSync:', file.toString());

// APPEND
// Add text to file
fs.appendFile('./hello.txt', ' This is so cool!', err => {
    if (err) {
        console.log(err);
    }
})

// WRITE
// Create new file
fs.writeFile('bye.txt', 'Sad to see you go', err => {
    if (err) {
        console.log(err);
    }
})

// DELETE
// Delete file
fs.unlink('./bye.txt', err => {
    if (err) {
        console.log(err);
    }
    console.log('Inception')
})
