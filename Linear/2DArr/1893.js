let prompt = require('prompt-sync')();

// Function definition
/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function(ranges, left, right) {
    let arr = Array(51).fill(false);

    for (let i = 0 ; i < ranges.length ; i++ ) {
        for ( let j = ranges[i][0] ; j <= ranges[i][1] ; j++   ){
            arr[j]=true;
        }
    }

    for ( let i = left ; i <= right ; i++ ) {
        if(arr[i] == false) return false;
    }


    return true;
}; // end function

// Take input for the 2D array
let row = Number(prompt('Row Size Is: '));
let col = 2; // Since the array represents ranges, each row will have exactly 2 columns
let arr = Array.from({ length: row }, () => Array(col));

for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
        arr[i][j] = Number(prompt(`Enter element at (${i}, ${j}):`));
    }
}

// Take input for left and right values
let left = Number(prompt('Enter the left value: '));
let right = Number(prompt('Enter the right value: '));

// Call the isCovered function
let result = isCovered(arr, left, right);

// Output the result
console.log("Ranges:", arr);
console.log("Left:", left);
console.log("Right:", right);
console.log("Is Covered:", result);
