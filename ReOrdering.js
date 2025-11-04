/*
There is a sentence that has a mistake in its ordering.
The part with a capital letter should be the first word.
Please write a function to re-order the words, so that the word starting with a capital letter is moved to the front.
Each word in the string is separated by a single space.
In the string, there will always be exactly one word with a capital letter in it.

Examples
"ming Yao" --> "Yao ming"
"Mano donowana" --> "Mano donowana"
"wario LoBan hello" --> "LoBan wario hello"
"bull color pig Patrick" --> "Patrick bull color pig"
*/

function reOrdering(text){
  let arr = text.split(" ");
  let res = arr.slice();
  
  for ( let i = 0; i < arr.length; i++ ) {
    
    if (arr[i][0].codePointAt(0) < 91) {
      res.unshift(arr[i]);
    } 
    
  }
  return Array.from(new Set(res)).join(" ");
}
