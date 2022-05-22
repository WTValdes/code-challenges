/*
Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.

Example

For n = 152, the output should be
solution(n) = 52;
For n = 1001, the output should be
solution(n) = 101.
*/

function solution(n) {
    var s = String(n).split('').map(Number)
        return Math.max(...s.map((el,i)=>{var r = s.slice(); r.splice(i,1); return Number( r.join(''))}));
    }
    