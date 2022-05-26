/*
Reverse the order of words in a given string sentence. You can assume that sentence does not have any leading, trailing or repeating spaces.

Example

For sentence = "Man bites dog", the output should be
solution(sentence) = "dog bites Man".
*/
function solution(sentence) {
    return sentence.split(' ').reverse().join(' ');
}
