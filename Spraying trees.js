/*
There are five workers : James, John, Robert, Michael and William. They work in a fixed order from Monday to Friday, and they rest on weekends. The order of work is as follows:
James works on Monday,
John works on Tuesday,
Robert works on Wednesday,
Michael works on Thursday,
William works on Friday.

Your task is to create a function that takes three arguments:
Weekday: The day of the week (e.g., Monday).
Number of Trees: The number of trees that must be sprayed on that day.
Cost per Litre: The cost of 1 litre of liquid needed to spray a tree. Assume that 1 tree requires 1 litre of liquid.

The total cost of the liquid to spray all trees is denoted as x.
The function should return a string in the following format:
'It is (weekday) today, (name), you have to work, you must spray (number) trees and you need (x) dollars to buy liquid'

Examples:
Input :
Weekday : "Monday".
Number of Trees : 15
Cost per Litre : 2
Output:
"It is Monday today, James, you have to work, you must spray 15 trees and you need 30 dollars to buy liquid."
*/

function task(w, n, c) {
  let worker;
  
  switch(w) {
    case "Monday":
      worker = "James";
      break;
    case "Tuesday":
      worker = "John";
      break;
    case "Wednesday":
      worker = "Robert";
      break;
    case "Thursday":
      worker = "Michael";
      break;
    case "Friday":
      worker = "William";
      break;
  }
  return `It is ${w} today, ${worker}, you have to work, you must spray ${n} trees and you need ${c * n} dollars to buy liquid`
}
