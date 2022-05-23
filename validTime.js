/*
Check if the given string is a correct time representation of the 24-hour clock.

Example

For time = "13:58", the output should be
solution(time) = true;
For time = "25:51", the output should be
solution(time) = false;
For time = "02:76", the output should be
solution(time) = false.

*/

function solution(time) {
    let str = time.split('');
    if (parseInt(str[0] + str[1]) < 24 && parseInt(str[0] + str[1]) >= 0 &&
    parseInt(str[3] + str[4]) < 60 && parseInt(str[3] + str[4]) >=0) {
        return true;
    } else {
        return false;
    }
}
