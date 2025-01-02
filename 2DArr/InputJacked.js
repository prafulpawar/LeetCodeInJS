let prompt = require('prompt-sync')();


let rows = Number(prompt('Row Size Is: ')); // Input number of rows
let arr = new Array(rows); // Create outer array

// Input column size and values for each row
for (let i = 0; i < arr.length; i++) {
    let col = Number(prompt(`Col Size for row ${i + 1} is: `)); // Input columns for each row
    arr[i] = new Array(col); // Create inner array

    // Input values for each element in the row
    for (let j = 0; j < col; j++) {
        arr[i][j] = Number(prompt(`Enter value for arr[${i}][${j}]: `)); // Input element
    }
}

for (let i = 0; i < arr.length; i++) {
   
    for (let j = 0; j <arr[i].col; j++) {
       
    }
}






console.log('Jagged Array: ', arr); // Output the jagged array


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
