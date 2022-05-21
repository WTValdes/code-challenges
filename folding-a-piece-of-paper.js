/*
Folding a Piece of Paper
Create a function that returns the thickness (in meters) of a piece of paper after folding it n number of times. The paper starts off with a thickness of 0.5mm.

Examples
numLayers(1) ➞ "0.001m"
// Paper folded once is 1mm (equal to 0.001m)

numLayers(4) ➞ "0.008m"
// Paper folded 4 times is 8mm (equal to 0.008m)

numLayers(21) ➞ "1048.576m"
// Paper folded 21 times is 1048576mm (equal to 1048.576m)
Notes
There are 1000mm in a single meter.
Don't round answers.
*/

function numLayers(n) {
	let string = (0.001 * Math.pow(2, n - 1));
	return string + 'm';
}

Test.assertEquals(numLayers(0), "0.0005m")
Test.assertEquals(numLayers(1), "0.001m")
Test.assertEquals(numLayers(2), "0.002m")
Test.assertEquals(numLayers(3), "0.004m")
Test.assertEquals(numLayers(4), "0.008m")
Test.assertEquals(numLayers(5), "0.016m")
Test.assertEquals(numLayers(6), "0.032m")
Test.assertEquals(numLayers(7), "0.064m")
Test.assertEquals(numLayers(8), "0.128m")
Test.assertEquals(numLayers(9), "0.256m")
Test.assertEquals(numLayers(10), "0.512m")
Test.assertEquals(numLayers(11), "1.024m")
Test.assertEquals(numLayers(12), "2.048m")
Test.assertEquals(numLayers(13), "4.096m")
Test.assertEquals(numLayers(14), "8.192m")
Test.assertEquals(numLayers(15), "16.384m")
Test.assertEquals(numLayers(16), "32.768m")
Test.assertEquals(numLayers(17), "65.536m")
Test.assertEquals(numLayers(18), "131.072m")
Test.assertEquals(numLayers(19), "262.144m")
Test.assertEquals(numLayers(20), "524.288m")
Test.assertEquals(numLayers(21), "1048.576m")
Test.assertEquals(numLayers(22), "2097.152m")
Test.assertEquals(numLayers(23), "4194.304m")
Test.assertEquals(numLayers(24), "8388.608m")
Test.assertEquals(numLayers(25), "16777.216m")
Test.assertEquals(numLayers(26), "33554.432m")
Test.assertEquals(numLayers(27), "67108.864m")
Test.assertEquals(numLayers(28), "134217.728m")
Test.assertEquals(numLayers(29), "268435.456m")
Test.assertEquals(numLayers(30), "536870.912m")
Test.assertEquals(numLayers(31), "1073741.824m")
Test.assertEquals(numLayers(32), "2147483.648m")
Test.assertEquals(numLayers(33), "4294967.296m")
Test.assertEquals(numLayers(34), "8589934.592m")
Test.assertEquals(numLayers(35), "17179869.184m")
Test.assertEquals(numLayers(36), "34359738.368m")
Test.assertEquals(numLayers(37), "68719476.736m")
Test.assertEquals(numLayers(38), "137438953.472m")
Test.assertEquals(numLayers(39), "274877906.944m")
Test.assertEquals(numLayers(40), "549755813.888m")
Test.assertEquals(numLayers(41), "1099511627.776m")
Test.assertEquals(numLayers(42), "2199023255.552m")
Test.assertEquals(numLayers(43), "4398046511.104m")
Test.assertEquals(numLayers(44), "8796093022.208m")
Test.assertEquals(numLayers(45), "17592186044.416m")
Test.assertEquals(numLayers(46), "35184372088.832m")
Test.assertEquals(numLayers(47), "70368744177.664m")
Test.assertEquals(numLayers(48), "140737488355.328m")
Test.assertEquals(numLayers(49), "281474976710.656m")
Test.assertEquals(numLayers(50), "562949953421.312m")
Test.assertEquals(numLayers(51), "1125899906842.624m")
Test.assertEquals(numLayers(52), "2251799813685.248m")
Test.assertEquals(numLayers(53), "4503599627370.496m")
Test.assertEquals(numLayers(54), "9007199254740.992m")
Test.assertEquals(numLayers(55), "18014398509481.984m")
Test.assertEquals(numLayers(56), "36028797018963.97m")
Test.assertEquals(numLayers(57), "72057594037927.94m")
Test.assertEquals(numLayers(58), "144115188075855.88m")
Test.assertEquals(numLayers(59), "288230376151711.75m")
Test.assertEquals(numLayers(60), "576460752303423.5m")