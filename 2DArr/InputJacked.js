let prompt = require('prompt-sync')();
let rows = Number(prompt('Row Size Is: '));
let cols = Number(prompt('Col Size Is: '));

// let jaggedArray = [];

// // Create rows dynamically
// for (let i = 0; i < rows; i++) {
//   jaggedArray[i] = []; // Initialize each row as an empty array

//   // Add a variable number of columns to each row
//   for (let j = 0; j < i + 1; j++) { // Example: increasing size for each row
//     jaggedArray[i].push(j + 1); // Add elements
//   }
// }

// console.log(jaggedArray);

let arr = new Array(rows)

for (let i = 0; i < arr.length; i++) {
    let col = Number(prompt('Col Size Is: '));
    arr[i] = new Array(col)
}

console.log(arr)