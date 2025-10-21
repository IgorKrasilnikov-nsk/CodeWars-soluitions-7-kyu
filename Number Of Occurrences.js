/*
Write a function that returns the number of occurrences of an element in an array.
This function will be defined as a property of Array with the help of the method Object.defineProperty, which allows to define a new method directly on the object (more info about that you can find on MDN).

Examples:
var arr = [0, 1, 2, 2, 3];
arr.numberOfOccurrences(0) === 1;
arr.numberOfOccurrences(4) === 0;
arr.numberOfOccurrences(2) === 2;
arr.numberOfOccurrences(3) === 1;
*/
const arr = [0, 1, 2, 2, 3];
const number = 2;

Array.prototype.numberOfOccurrences = function(num) {
  let count = 0;
  this.forEach((x) => x === num ? count++ : undefined)
  return count;
}

console.log(arr.numberOfOccurrences(number));
