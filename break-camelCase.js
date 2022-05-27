/*

Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

function solution(string) {
    return string.match(/[A-Z]?[a-z]+|[0-9]+|[A-Z]+(?![a-z])/g).join(' ')
  }