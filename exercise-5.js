console.log('EXERCISE 5:');

// 1. Create a new array `shoppingList` with a few string elements
const shoppingList = ['bread', 'cheese', 'shampoo'];

// 2. Using `forEach`, log every element of the `shoppingList` array to the console
shoppingList.forEach(item => console.log(item));

// 3. For each element in the `shoppingList` array, create an `<li>` node and
//    append it to the `<ul>` element on the page (use `document.createElement`
//    and `.appendChild`)
shoppingList.forEach(item => {
	// Create a new <li> element
	const li = document.createElement('li');

	// Change its text to be the current item in the shoppingList
	li.textContent = item;

	// Add it to the end of the <ul> element on the page
	document.querySelector('ul').appendChild(li);
});

// 4. Create a new array `numbers` with a few numeric elements
const numbers = [1, 2, 4.5, -10.25];

// 5. Using `map` on the `numbers` array, create a new array called
//    `squareNumbers` where each element is the square of the corresponding
//    element in the `numbers` array
const squareNumbers = numbers.map(number => number ** 2);

console.log('numbers:', numbers);
console.log('squareNumbers:', squareNumbers);
