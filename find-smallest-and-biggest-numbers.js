/*
Find the Smallest and Biggest Numbers
Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

Examples
minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

minMax([2334454, 5]) ➞ [5, 2334454]

minMax([1]) ➞ [1, 1]
Notes
All test arrays will have at least one element and are valid.
*/

function minMax(arr) {
	return [(Math.min(...arr)), (Math.max(...arr))]
}

Test.assertSimilar(minMax([14, 35, 6, 1, 34, 54]), [1, 54])
Test.assertSimilar(minMax([1.346, 1.6532, 1.8734, 1.8723]), [1.346, 1.8734])
Test.assertSimilar(minMax([0.432, 0.874, 0.523, 0.984, 0.327, 0.2345]), [0.2345, 0.984])
Test.assertSimilar(minMax([13, 72, 98, 43, 24, 65, 31]), [13, 98])
Test.assertSimilar(minMax([-54, -23, -54, -21]), [-54, -21])
Test.assertSimilar(minMax([-0.473, -0.6834, -0.1287, 0.5632]), [-0.6834, 0.5632])
Test.assertSimilar(minMax([0, 0, 0, 0]), [0, 0])