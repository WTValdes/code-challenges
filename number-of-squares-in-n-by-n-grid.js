/*
Number of Squares in an N * N Grid
Create a function that calculates the number of different squares in an n * n square grid. Check the Resources tab.

Examples
numberSquares(2) ➞ 5

numberSquares(4) ➞ 30

numberSquares(5) ➞ 55
Explanation
If n = 0 then the number of squares is 0
If n = 1 then the number of squares is 1 + 0 = 1
If n = 2 then the number of squares is 2^2 + 1 = 4 + 1 = 5
If n = 3 then the number of squares is 3^2 + 5 = 9 + 5 = 14
As you can see, for each value of n the number of squares is n squared + the number of squares from the previous value of n.

Notes
Input is a positive integer.
Square pyramidal number.
*/

function numberSquares(n) {
    return eval(n * (n + 1) * (2 * n + 1) / 6);
}

Test.assertEquals(numberSquares(3), 14)
Test.assertEquals(numberSquares(10), 385)
Test.assertEquals(numberSquares(12), 650)
Test.assertEquals(numberSquares(5), 55)
Test.assertEquals(numberSquares(9), 285)
Test.assertEquals(numberSquares(11), 506)
Test.assertEquals(numberSquares(15), 1240)