/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.
*/


function solution(number){
    let counter = 1;
    const multiples = [];
    if (number < 0) {
      return 0;
    }
    while (counter < number) {
      if (counter % 3 === 0 || counter % 5 === 0) {
        multiples.push(counter);
      }
      counter++;
    }
    if (multiples.length === 0) {
      return 0;
    }
    return multiples.reduce((a, b) => a + b);
  }

