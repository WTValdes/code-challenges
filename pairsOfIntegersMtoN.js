/*
Implement a function that receives two integers m and n and generates a sorted list of pairs (a, b) such that m <= a <= b <= n.

The input m will always be smaller than or equal to n (e.g., m <= n)

Example
m = 2
n = 4

result = [(2, 2), (2, 3), (2, 4), (3, 3), (3, 4), (4, 4)]

*/

function generatePairs(m, n) {
    let a = m;
    let b = m;
    let arr = [];
    
    while (a !== n) {
      arr.push([a, b]);
      b++;
      if (b === n) {
        arr.push([a, b]);
        a++;
        b = a;
      }
    }
    arr.push([a, b]);
    return arr;
  }
