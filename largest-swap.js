/*
Largest Swap
Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.

To illustrate:

largestSwap(27) ➞ false

largestSwap(43) ➞ true
If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34.

Examples
largestSwap(14) ➞ false

largestSwap(53) ➞ true

largestSwap(99) ➞ true
Notes
Numbers with two identical digits (third example) should yield true (you can't do better).
*/

function largestSwap(num) {
	num = num.toString();
	return num.charAt(0) >= num.charAt(1);
}

Test.assertEquals(largestSwap(27), false, '27 < 72, so not largest swap.')
Test.assertEquals(largestSwap(43), true, '43 > 34, so largest swap.')
Test.assertEquals(largestSwap(14), false, '14 < 41, so not largest swap.')
Test.assertEquals(largestSwap(53), true, '53 > 35, so largest swap.')
Test.assertEquals(largestSwap(99), true, 'Cannot do better, so largest swap.')