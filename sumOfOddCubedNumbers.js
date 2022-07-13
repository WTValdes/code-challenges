/*
Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.


*/

function cubeOdd(arr) {
    return arr.some(isNaN) ? undefined : 
      arr.map(a => Math.pow(a, 3))
         .filter(b => b % 2 !== 0)
           .reduce((x, y) => x + y, 0) 
  }

