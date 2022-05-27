/*
Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.


*/

function firstNonRepeatingLetter(s) {
    let count = 0;
    s = s.split('')
    for (let i = 0; i < s.length; i++) {
      for (let j = 0; j < s.length; j++) {
        if (s[i].toLowerCase() === s[j].toLowerCase()) {
          count++;
        }
      }
      if (count < 2) {
        return s[i]
      }
      count = 0;
    }
    return '';
  }