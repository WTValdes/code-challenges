/*
We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example
add("123", "321"); -> "444"
add("11", "99");   -> "110"
Notes
The input numbers are big.
The input is a string of only digits
The numbers are positives
*/

function add(a, b) {
    let result = '';
    a = a.split('');
    b = b.split('');
    let c = 0;
    
    while (a.length || b.length || c) {
      c += ~~a.pop() + ~~b.pop(); 
      result = c % 10 + result;
      c = c > 9;
    }
    return result;
  }