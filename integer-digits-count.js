/*
Integer Digits Count
Create a function that counts the integer's number of digits.

Examples
count(318) ➞ 3
 
count(-92563) ➞ 5
 
count(4666) ➞ 4

count(-314890) ➞ 6

count(654321) ➞ 6

count(638476) ➞ 6
Notes
For an added challenge, try to solve this without using strings.
Alternatively, you can solve this via a recursive approach.
A reversion of this challenge can be found via this link.
*/

function count(n) {
	return Math.abs(n).toString().split('').length;
}

// Test

let [numVector, resVector] = [
	[0, 318, -92563, 4666, -314890, 654321, 638476, 12345, 1289396, -1232323, 12839393, -231273683],
	[1, 3, 5, 4, 6, 6, 6, 5, 7, 7, 8, 9]
  ]
  for (let i in numVector) Test.assertEquals(count(numVector[i]), resVector[i])