/*
Problem
Complete the function that takes an odd integer (0 < n < 1000000) which is the difference between two consecutive perfect squares, and return these squares as a string in the format "bigger-smaller"

Examples
9  -->  "25-16"
5  -->  "9-4"
7  -->  "16-9"
*/

const findSquares = num => {
    let diff = 0;
    let square = 0;
    for (let i = 1; diff < num; i++) {
      diff = (i * i) - ((i - 1) * (i - 1));
      square = i;
    }
    return `${square * square}` + '-' + `${(square - 1) * (square - 1)}`;
  };

