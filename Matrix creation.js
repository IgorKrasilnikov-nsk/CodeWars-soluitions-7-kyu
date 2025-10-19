/*
Create an identity matrix of the specified size ( >= 0 ).

Some examples:

(1)  =>  [[1]]

(2) => [ [1,0],
         [0,1] ]

       [ [1,0,0,0,0],
         [0,1,0,0,0],
(5) =>   [0,0,1,0,0],
         [0,0,0,1,0],
         [0,0,0,0,1] ]   
*/
function getMatrix(number) {
  if (number == 0) return [];
  
  let matrix = [];
  
  for (let i = 0; i < number; i++) {
    matrix[i] = [];
    
    for (let j = 0; j < number; j++) {
      
      if (j === i) {
        matrix[i].push(1)
      } else {
        matrix[i].push(0)
      }
    }
  }
  return matrix;
}
