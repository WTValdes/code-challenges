/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str){
    str = str.split(' ');
    for (let i = 0; i < str.length; i++) {
      if (str[i].match(/[a-z]/gi)) {
        str[i] = str[i].slice(1, str[i].length) + str[i].slice(0, 1) + 'ay';
      }
    }
    return str.join(' ');
  }