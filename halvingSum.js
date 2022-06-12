/*
Task
Given a positive integer n, calculate the following sum:

n + n/2 + n/4 + n/8 + ...
All elements of the sum are the results of integer division.

Example
25  =>  25 + 12 + 6 + 3 + 1 = 47
*/

function halvingSum(n) {
    let result = 0;
    let div = 1
    
    while (div <= n) {
      result += Math.floor(n / div);
      div = div * 2
    }
    return result;
  }

