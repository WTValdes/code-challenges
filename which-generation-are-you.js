/*
Which Generation Are You?
Try finding your ancestors and offspring with code.

Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

If the number is negative, return the related ancestor.
If positive, return the related descendant.
You are generation 0. In the case of 0 (male or female), return "me!".
Examples
generation(2, "f") ➞ "granddaughter"

generation(-3, "m") ➞ "great grandfather"

generation(1, "f") ➞ "daughter"
Notes
Check the Resources tab for helpful hints.

Generation	Male	Female
-3	great grandfather	great grandmother
-2	grandfather	grandmother
-1	father	mother
0	me!	me!
1	son	daughter
2	grandson	granddaughter
3	great grandson	great granddaughter
*/

function generation(x, y) {
	let result;
	const male = ['great grandfather', 'grandfather', 'father', 
				  'me!', 'son', 'grandson', 'great grandson'];
	const female = ['great grandmother', 'grandmother', 
					'mother', 'me!', 'daughter', 
					'granddaughter', 'great granddaughter'];
	let newNum = x + 3;
	
	if (y === 'm') {
		result = male[newNum];
	} else if (y === 'f') {
		result = female[newNum];
	}
	return result;
}

Test.assertEquals(generation(-3, "m"), "great grandfather", "3 generations before you, male...")
Test.assertEquals(generation(1, "f"), "daughter", "1 generation after you, female...")
Test.assertEquals(generation(-3, "f"), "great grandmother")
Test.assertEquals(generation(-2, "m"), "grandfather")
Test.assertEquals(generation(-2, "f"), "grandmother")
Test.assertEquals(generation(-1, "m"), "father")
Test.assertEquals(generation(-1, "f"), "mother")
Test.assertEquals(generation(0, "f"), "me!")
Test.assertEquals(generation(1, "m"), "son")
Test.assertEquals(generation(1, "f"), "daughter")
Test.assertEquals(generation(2, "m"), "grandson")
Test.assertEquals(generation(2, "f"), "granddaughter")
Test.assertEquals(generation(3, "m"), "great grandson")
Test.assertEquals(generation(3, "f"), "great granddaughter")
Test.assertEquals(generation(0, "m"), "me!")