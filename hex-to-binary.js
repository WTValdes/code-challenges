/*
Hex to Binary
Create a function that will take a HEX number and returns the binary equivalent (as a string).

Examples
toBinary(0xFF) ➞ "11111111"

toBinary(0xAA) ➞ "10101010"

toBinary(0xFA) ➞ "11111010"
Notes
The number will be always an 8-bit number.
*/

function toBinary(num) {
	return num.toString(2);
}

Test.assertEquals(toBinary(0xFF), "11111111")
Test.assertEquals(toBinary(0xAA), "10101010")
Test.assertEquals(toBinary(0xFA), "11111010")