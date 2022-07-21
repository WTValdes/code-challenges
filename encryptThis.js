/*
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/

var encryptThis = function(text) {
    let asc = '';
    text = text.split(' ');
  
    for (let i = 0; i < text.length; i++) {
      asc = text[i].charCodeAt(0).toString();
      
      if (text[i].length < 2) {
        text[i] = asc;
      } else if (text[i].length === 2) {
        text[i] = asc.concat(text[i].slice(1))
      } else {
        text[i] = asc.concat(text[i].slice(text[i].length - 1)
                             .concat(text[i].slice(2, text[i].length - 1))
                                .concat(text[i].slice(1, 2)))
      }
    }
    return text.join(' ')
    }

