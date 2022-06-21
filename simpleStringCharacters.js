/*
In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.
More examples in the test cases.

Good luck!
*/

function solve(s){
    s = s.split('');
    return [s.filter(a => a.match(/[A-Z]/)).length, 
            s.filter(a => a.match(/[a-z]/)).length,
            s.filter(a => a.match(/[0-9]/)).length,
            s.filter(a => a.match(/[^A-Za-z0-9]/)).length]
  }
