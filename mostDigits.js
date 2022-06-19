/*
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.


*/

function findLongest(array){
    let digits = array.map(a => a.toString().length);
    return array[digits.indexOf(Math.max(...digits))];
  }
