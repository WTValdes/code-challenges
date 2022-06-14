/*
Given a number n and two values firstValue and secondValue, build an array of size n filled with firstValue and secondValue alternating.

for input:                5, true, false
expected result would be: [true, false, true, false, true]
*/

function alternate(n, firstValue, secondValue){
    let arr = [];
    while (arr.length < n) {
      arr.push(firstValue);
      if (arr.length === n) {
        break;
      }
      arr.push(secondValue)
    }
    return arr;
  }
