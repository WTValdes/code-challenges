/*
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.
*/

function isSortedAndHow(array) {
    let origin = [...array];
    let asc = [...array];
    let desc = [...array];
    asc = asc.sort((a, b) => a - b)
    desc = desc.sort((a, b) => b - a)
  
    for (let i = 0; i < origin.length; i++) {
      if (origin[i] !== asc[i] && origin[i] !== desc[i]) {
        return 'no';
       } else if (origin[i] !== asc[i]) {
         return 'yes, descending'
       } else {
         return 'yes, ascending'
       }
    }
    return 'no'
  }
