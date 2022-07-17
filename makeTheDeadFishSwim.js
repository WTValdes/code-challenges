/*
Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ]
*/

function parse( data ){
    let val = 0;
    let result = [];
    data.split('').map(a => a === 'i' ? val++ : a === 'd' ? val-- : a === 's' ? 
                       val = Math.pow(val, 2) : a === 'o' ? result.push(val) : 0);
    return result;
  }

