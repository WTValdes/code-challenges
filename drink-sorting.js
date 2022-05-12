/*
Drink Sorting
You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.

Assume that the following array of drink objects needs to be sorted:

drinks = [
  {name: "lemonade", price: 50},
  {name: "lime", price: 10}
]
The output of the sorted drinks object will be:

Examples
sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]

*/

function sortDrinkByPrice(drinks) {
	drinks.sort(function (a, b) {
		if (a.price < b.price) {return -1};
		if (a.price > b.price) {return 1};
    }); 
    return drinks;
}

// Tests

const drinks1 = [
	{name: 'lemonade', price: 90}, 
	{name: 'lime', price: 432}, 
	{name: 'peach', price: 23}
];

const sorted1 = [
	{name: 'peach', price: 23},
	{name: 'lemonade', price: 90}, 
	{name: 'lime', price: 432}
];

const drinks2 = [
	{name: 'water', price: 120}, 
	{name: 'lime', price: 80}, 
	{name: 'peach', price: 90}
];

const sorted2 = [
	{name: 'lime', price: 80},
	{name: 'peach', price: 90}, 
	{name: 'water', price: 120}
];

Test.assertSimilar(sortDrinkByPrice(drinks1), sorted1, "Object is not sorted.");
Test.assertSimilar(sortDrinkByPrice(drinks2), sorted2, "Object is not sorted.");