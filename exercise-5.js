// 1. Create a new array `shoppingList` with a few string elements
shoppingList = [`orange`,`papaya`,`KFC`];

// 2a. Using `forLoop`, log every element of the shoppingList` array to the console
for (i=0;i<shoppingList.length;i++) {
    console.log(shoppingList[i]);
}

// 2b. Using `forEach`, log every element of the `shoppingList` array to the console
shoppingList.forEach((element) => {console.log(element)});


// 3. For each element in the `shoppingList` array, create an `<li>` node and
//    append it to the `<ul>` element on the page (use `document.createElement`
//    and `.appendChild`)


// 4. Create a new array `numbers` with a few numeric elements
numbers = [12,34,55,67,89];

// 5. Using `map` on the `numbers` array, create a new array called
//    `squareNumbers` where each element is the square of the corresponding
//    element in the `numbers` array
let squareNumbers = [];
for(i=0;i<numbers.length;i++) {
    squareNumbers.push(Math.pow(numbers[i],2));
}
console.log(squareNumbers)

squareNumbers = numbers.map((val) => (Math.pow(val,2)));
console.log(squareNumbers)