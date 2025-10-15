/*
Return an array containing the numbers from 1 to N, where N is the parametered value.
Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.

Method calling example:
fizzbuzz(3) -->  [1, 2, "Fizz"]
*/

function fizzbuzz(n){
  let array = [...Array(n+1).keys()].slice(1);
  for(let i = 0; i < array.length; i++){
    if (array[i] % 5 === 0 && array[i] % 3 === 0) {
      array[i] = "FizzBuzz";
    } else if(array[i] % 5 === 0) {
      array[i] = "Buzz";
    } else if(array[i] % 3 === 0) {
      array[i] = "Fizz";
    }
  }
  return array;
}
