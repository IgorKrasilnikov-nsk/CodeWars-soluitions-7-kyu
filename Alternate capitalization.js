/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
The input will be a lowercase string with no spaces.
Good luck!
*/
function capitalize(s){
  let resEven = "";
  let resOdd = "";
        
  for (let i = 0; i < s.length; i++) {
    if (i % 2 == 0) {
      resEven += s[i].toUpperCase();
      resOdd += s[i];
    } else {
      resEven += s[i];
      resOdd += s[i].toUpperCase();
    }
  }
  
  let arr = [resEven, resOdd];
  return arr;
};
