/*
You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

e.g. transposeTwoStrings(['Hello','World']);

should return

H W  
e o  
l r  
l l  
o d
A few things to note:

There should be one space in between the two characters
You don't have to modify the case (i.e. no need to change to upper or lower)
If one string is longer than the other, there should be a space where the character would be

*/

function transposeTwoStrings (array) {
    let n = 0;
    let result = [];
    let len = array[0].length;
    
    if (array[0].length !== array[1].length) {
      len = Math.max(array[0].length, array[1].length)
    }
    
    while (n <  len) {
      if (array[0][n]) {
        result.push(`${array[0][n]}`);
      }
      if (!array[0][n]) {
        result.push(' ');
      }
      
      result.push(' ');
      
      if (array[1][n]) {
        result.push(`${array[1][n]}`);
      }
      if (!array[1][n]) {
        result.push(' ');
      }
      
      if (n < len - 1) {
        result.push(`\n`)
      }
      
      n++;
    }
    return result.join('');
  }

