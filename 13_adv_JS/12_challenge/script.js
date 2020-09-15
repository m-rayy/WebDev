// What is the Challenge?
// Solve the below 3 javascript puzzles. The goal of this challenge is to practice our logic skills. 
// Something that is useful not only in interviews when you get challenging problems, but also in your day to day work as a developer.

// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],
// make a function that organizes these into individual array that is ordered.
// For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].
const inputArray = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

function createUniqueSortedArray(array) {
    array.sort((a,b)=>a-b);
    uniqueSortedArray = [...new Set(array)];
    return uniqueSortedArray;
}

function arrangeArray(array) {
    createUniqueSortedArray(array);

    arrangedArray = [];
    for (item of uniqueSortedArray) {
        count = array.filter(x => x == item).length;
        if (count === 1) {
            arrangedArray.push(item)
        }
        else {
            arrangedArray.push(Array(count).fill(item))
        }
    }

    return arrangedArray;
}

console.log(arrangeArray(inputArray));

// BONUS: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]
const mixedArray = [1,2,4,591,392,391,2,"5",10,2,"1","1",1,20,20];

function arrangemixedArray(array) {
    let NumberArray = array.filter(item => typeof(item) === 'number');
    let StringArray = array.filter(item => typeof(item) === 'string');
    
    numberUniqueSortedArray = createUniqueSortedArray(NumberArray);
    stringUniqueSortedArray = createUniqueSortedArray(StringArray);
    
    arrangedNumberArray = [];
    for (item of numberUniqueSortedArray) {
        count = NumberArray.filter(x => x == item).length;
        if (count === 1) {
            arrangedNumberArray.push(item)
        }
        else {
            arrangedNumberArray.push(Array(count).fill(item))
        }
    }

    arrangedStringArray = [];
    for (item of stringUniqueSortedArray) {
        count = StringArray.filter(x => x == item).length;
        if (count === 1) {
            arrangedStringArray.push(item)
        }
        else {
            arrangedStringArray.push(Array(count).fill(item))
        }
    }

    arrangedArray = [];
    arrangedArray.push(arrangedNumberArray);
    arrangedArray.push(arrangedStringArray);

    return arrangedArray;
}

console.log(arrangemixedArray(mixedArray));


// Question 2: Write a javascript function that takes an array of numbers and a target number.
// The function should find two different numbers in the array that, when added together, give the target number.
// For example: answer([1,2,3], 4)should return [1,3]
const sumTarget = (array, target) => {
     for (item of array) {
        for (item2 of array) {
           if (item + item2 === target && item !== item2 ) {
            return [item, item2];
          }        
       }    
    }
  }

  const array = [1,2,3];
  console.log(sumTarget(array, 4));
  
  console.log(sumTarget(inputArray, 3));
  console.log(sumTarget(mixedArray, 11));


// Question 3: Write a function that converts HEX to RGB.
// Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

// Research:
// https://www.rapidtables.com/convert/color/how-hex-to-rgb.html
// https://owlcation.com/stem/Convert-Hex-to-Decimal#:~:text=To%20convert%20a%20hexadecimal%20to,to%20the%20hexadecimal%20number%20equivalent.

const hexadecimalToDecimal = (hexadecimal) => {
    if (hexadecimal === 'A') {
        return 10;
    }
    if (hexadecimal === 'B') {
        return 11;
    }
    if (hexadecimal === 'C') {
        return 12;
    }
    if (hexadecimal === 'D') {
        return 13;
    }
    if (hexadecimal === 'E') {
        return 14;
    }
    if (hexadecimal === 'F') {
        return 15;
    } else {
        return hexadecimal;
    }
}

const hexToDecimal = (hex) => {
    hex_array = hex.split("").reverse();
    decimal = 0
    for (i = 0; i < hex_array.length; i++) {
        decimal += (hexadecimalToDecimal(hex_array[i]) * (16 ** i));
    }
    return decimal;
}

console.log(hexToDecimal('FF'));
console.log(hexToDecimal('ABC'));

const hexToRGB = (hex) => {
    R = hexToDecimal(hex.substring(1,3));
    G = hexToDecimal(hex.substring(3,5));
    B = hexToDecimal(hex.substring(5,7));
    return `(${R}, ${G}, ${B})`;
}

console.log(hexToRGB('#FF0000'));
console.log(hexToRGB('#FF3399'));
console.log(hexToRGB('#C0C0C0'));
// To verify results:
// https://www.rapidtables.com/web/color/RGB_Color.html

// TODO: reverse convertor
// TODO: multi-way automatic converter

// You can see the solution files by other students here
// https://www.freecodecamp.org/news/how-to-think-like-a-programmer-lessons-in-problem-solving-d1d8bf1de7d2/