/*
Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial


*/

function factorial(n){
    let count = n;
    let total = n;
    if (n === 0) {
      return 1;
    }
    while (count >= 2) {
      count = count - 1;
      total = total * count;
    }
    return total;
  }
