/*
Write reverseList function that simply reverses lists.
*/

function reverseList(arr) {
    result = [];
    arr.forEach(a => result.unshift(a));
    return result;
    
    // Also works:
    // return arr.reverse();
  }

