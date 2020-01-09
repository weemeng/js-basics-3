const assert = require("assert");

// 1. Create an array `names` with at least 3 elements: `'david'`, `'gordon'`, and
//    `'sahil'` and log it to the console
const names = [`david`, `gordon`,`sahil`];
console.log(names);
// assert.equal(names, [`david`, `gordon`,`sahil`]);

// 2. Log the value of the third element in `names` to the console
assert.strictEqual(names[2], `sahil`);

// 3. Log the value of the `names` array's `length` property to the console
assert.strictEqual(names.length, 3);

// 4. Set the value of the `length` property to `1`
names.length = 1;

// 6. Once again, log the value of the `names` array's `length` property to the
//    console. Did it change?
console.log(names.length)

// 7. Log the entire `names` array to the console again
console.log(names)

// 8. Add a few more elements to the array using `push`
names.push(`gordon`);
names.push(`sahil`);

// 9. Log the last element of the array to the console
assert.strictEqual(names[2],`sahil`);

// 10. Log the second last element of the array to the console
console.log(names[names.length-2]);

// 11. Change the `textContent` property of the _second_ `p` tag on the page to
//    `"JavaScript was here!"`


// 12. Convert the `names` array to a string, with each element separated by a
//    '<br>'. Store it in a new variable called `namesString` e.g. if `names` is
//    `['harry', 'ron', 'dean']` then `namesString` will be `"harry<br>ron<br>dean"`
// let namesString = names[0];
// for(i=1;i<names.length;i++) {
//     namesString += '<br>' + names[i]

// }
// console.log(namesString)

namesString = names.join('<br>');
console.log(namesString);



// 13. Change the `innerHTML` property of the _first_ `p` tag on the page to
//    `namesString`. What happens when you use `textContent` instead of
//    `innerHTML`?


