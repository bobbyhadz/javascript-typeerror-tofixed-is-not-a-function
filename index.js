// TypeError: toFixed is not a function in JavaScript

// EXAMPLE 1 - Convert the value to a `number` before calling the `toFixed()` method

const num = '123.456';

const result = Number(num).toFixed(2);
console.log(result); // 👉️ 123.46

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if the value is of type `number` before calling `toFixed()`

// const num = null;

// const result = typeof num === 'number' ? num.toFixed(2) : 0;
// console.log(result); // 👉️ 0

// ------------------------------------------------------------------

// // EXAMPLE 3 - Using an if/else statement to check if the value is a number

// const num = null;

// let result = 0;

// if (typeof num === 'number') {
//   result = num.toFixed(2);
// }

// console.log(result); // 👉️ 0
