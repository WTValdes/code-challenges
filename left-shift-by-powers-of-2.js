/*
Left Shift by Powers of Two
The left shift operation is similar to multiplication by powers of two.

Sample calculation using the left shift operator (<<):

10 << 3 = 10 * 2^3 = 10 * 8 = 80
-32 << 2 = -32 * 2^2 = -32 * 4 = -128
5 << 2 = 5 * 2^2 = 5 * 4 = 20
Write a function that mimics (without the use of <<) the left shift operator and returns the result from the two given integers.

Examples
shiftToLeft(5, 2) ➞ 20

shiftToLeft(10, 3) ➞ 80

shiftToLeft(-32, 2) ➞ -128

shiftToLeft(-6, 5) ➞ -192

shiftToLeft(12, 4) ➞ 192

shiftToLeft(46, 6) ➞ 2944
Notes
There will be no negative values for the second parameter y.
This challenge is more like recreating of the left shift operation, thus, the use of the operator directly is prohibited.
Alternatively, you can solve this challenge via recursion.
A recursive version of this challenge can be found via this link.
*/

function shiftToLeft(x, y) {
	return (x * (Math.pow(2,y)));
}

// Tests

const opCheck = f => !`${f}`.match(RegExp('<<', 'gm'))
Test.assertNotEquals(opCheck(shiftToLeft), false,
    "The use of left shift operator (<<) is prohibited!")

let [numVector, resVector] = [
  [[5, 2], [10, 3], [-32, 2], [-6, 5], [12, 4], [46, 6], [57, 0], [79, 1]],
  [20, 80, -128, -192, 192, 2944, 57, 158]
]
for (let i in numVector) Test.assertEquals(shiftToLeft(...numVector[i]), resVector[i])