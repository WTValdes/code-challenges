/*
Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

Return as a number.
*/

function divCon(x){
    let str = [];
    let nums = [];
    x.forEach(a => typeof a == 'string' ? str.push(a) : typeof a == 'number' ? nums.push(a) : 0);
    return nums.reduce((m, n) => m + n, 0) - str.map(b => parseInt(b)).reduce((r, s) => r + s, 0);
  }

