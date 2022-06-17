/*
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.
*/

function sumDigits(number) {
    let result = [];
    let nums = ['0', '1', '2', '3', '4',
               '5', '6', '7', '8', '9'];
    number = number.toString().split('');
    for (let i = 0; i < number.length; i++) {
      if (nums.includes(number[i])) {
        result.push(parseInt(number[i]))
      }
    }
    return result.reduce((a, b) => a + b)
  }
