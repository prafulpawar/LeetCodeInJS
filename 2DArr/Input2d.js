let prompt = require('prompt-sync')();
let row = Number(prompt('Row Size Is: '));
let col = Number(prompt('Col Size Is: '));

let arr = Array.from({ length: row }, () => Array(col));


for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        arr[i][j] = Number(prompt(`Enter element at (${i}, ${j}):`));
    }
}





// let rows = parseInt(prompt("Enter number of rows:"));
// let cols = parseInt(prompt("Enter number of columns:"));

// // Create 2D array
// let arr = [];
// for (let i = 0; i < rows; i++) {
//   arr[i] = []; // Initialize each row
//   for (let j = 0; j < cols; j++) {
//     arr[i][j] = parseInt(prompt(`Enter element at (${i}, ${j}):`)); // Input values
//   }
// }

// console.log(arr); // Prints the 2D array
