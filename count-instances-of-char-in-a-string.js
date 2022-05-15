/*
Count Instances of a Character in a String
Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

Examples
charCount("a", "edabit") ➞ 1

charCount("c", "Chamber of secrets") ➞ 1

charCount("b", "big fat bubble") ➞ 4
Notes
Your output must be case-sensitive (see second example).
*/

function charCount(myChar, str) {
	let chars = 0;
	for (i = 0; i < str.length; i++){
		if (myChar == str[i]) {
			chars = chars + 1;
		}
	} 
    return chars;
}

Test.assertEquals(charCount('a', 'edabit'), 1)
Test.assertEquals(charCount('b', 'big fat bubble'), 4)
Test.assertEquals(charCount('c', 'Chamber of secrets'), 1)
Test.assertEquals(charCount('f', 'frank and his friends have offered five foxes for sale'), 7)
Test.assertEquals(charCount('x', 'edabit'), 0)
Test.assertEquals(charCount('a', 'Adam and Eve bit the apple and found a snake'), 6)
Test.assertEquals(charCount('s', 'sssssssssssssssssssssssss'), 25)
Test.assertEquals(charCount('7', '10795426697'), 2)