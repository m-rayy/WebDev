// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0
const negative_array = [-1, -2, -3] // (new test with negative numbers only) should return -1

function biggestNumberInArray(arr) {
  // Define variable
  let biggest = -1;
  // Define variable for empty arrays
  if (arr.length === 0) {
    biggest = 0;
  }
  // Check if item in array is greater than biggest
  for (item of arr) {
    if (biggest < item) {
      biggest = item;
    }
  }
  // Log result
  console.log(biggest);
}
biggestNumberInArray(array);
biggestNumberInArray(array2);
biggestNumberInArray(array3);
biggestNumberInArray(negative_array);

function biggestNumberInArray_method2(arr) {
// let i = 0...
  let biggest = -1;
  if (arr.length === 0) {
    biggest = 0;
  }
  for (let i = 0; i < arr.length; i++) {
    for (item of arr) {
      if (biggest < item) {
        biggest = item;
      }
    }
  }
  console.log('method2: ', biggest);
}
biggestNumberInArray_method2(array);
biggestNumberInArray_method2(array2);
biggestNumberInArray_method2(array3);
biggestNumberInArray_method2(negative_array);

function biggestNumberInArray_method3(arr) {
  let biggest = -1;
  if (arr.length === 0) {
    biggest = 0;
  }
  arr.forEach((i) => {
    if (biggest < arr[i]) {
      biggest = arr[i];
    }
  })
  console.log('method3 ', biggest);
}
biggestNumberInArray_method3(array);
biggestNumberInArray_method3(array2);
biggestNumberInArray_method3(array3);
biggestNumberInArray_method3(negative_array);


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {
  for (item in basket) {
    if (item === lookingFor) {
      console.log(`${lookingFor} is in your basket`)
      // TODO: Quokka not printing returns:
      return `${lookingFor} is in your basket`
    }
  }
  console.log('that does not exist in your basket')
  return 'that does not exist in your basket'
}

checkBasket(amazonBasket, 'glasses');
checkBasket(amazonBasket, 'books');
checkBasket(amazonBasket, 'floss');
checkBasket(amazonBasket, 'guitar');
