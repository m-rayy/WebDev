// Debugger
const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    (accumulator, array) => {
        console.log('array', array);
        console.log('accumulator', accumulator);
        debugger; // enter debbuger console in browser
        return accumulator.concat(array);
    },
    []
);

flattened;
