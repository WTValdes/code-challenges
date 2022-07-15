/*
Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

-- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
solve("zodiacs") = 26

For the word "strength", solve("strength") = 57
-- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
*/

function solve(s) {
    s = s.split('');
    let count = 0;
    let biggest = 0;
    let alpha = '*abcdefghijklmnopqrstuvwxyz'.split('');
    let consonants = 'bcdfghjklmnpqrstvwxyz'.split('');
    for (let i = 0; i < s.length; i++) {
      if (consonants.includes(s[i])) {
        count += alpha.indexOf(s[i]);
      } else {
        if (count > biggest) {
          biggest = count;
        }
        count = 0;
      }
    }
    if (count > biggest) {
      biggest = count;
    }
    return biggest;
  };

