/*
Given a string, return its encoding defined as follows:

First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
for example, "aabbbc" is divided into ["aa", "bbb", "c"]
Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character
for example, substring "bbb" is replaced by "3b"
Finally, all the new strings are concatenated together in the same order and a new string is returned.
Example

For s = "aabbbc", the output should be
solution(s) = "2a3bc".

Input/Output

[execution time limit] 4 seconds (js)

[input] string s

String consisting of lowercase English letters.

Guaranteed constraints:
4 ≤ s.length ≤ 15.

[output] string

Encoded version of s.
*/

function solution(s) {
    let splitStr = s.split('')
    let currChar = '';
    let count = 1;
    let result = [];
    
    for (let i = 0; i < splitStr.length - 1; i++) {
        currChar = splitStr[i]
        if (splitStr[i] === splitStr[i + 1]) {
            count++;
            if ((i + 1) === (splitStr.length - 1)){
                if (count > 1){
                result.push(count);
            }
                result.push(currChar)
            }
        } else {
            if (count > 1){
                result.push(count);
            }
            result.push(currChar)
            count = 1
            if ((i + 1) === (splitStr.length - 1)) {
                result.push(splitStr[splitStr.length - 1])
            }
        }
    }
    return result.join('')
}
