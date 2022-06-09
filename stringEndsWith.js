/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

function solution(str, ending){
    str = str.split('');
    ending = ending.split('');
    for (let i = 0; i < ending.length; i++) {
      if (str[str.length - ending.length + i] !== ending[i]) {
        return false;
      }
    }
    return true;
  }

