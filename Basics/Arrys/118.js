
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    const arr = [];
     numRows = 3;

    // Dynamically filling rows and columns
    for (let i = 0; i < numRows; i++) {
        const cols = i + 1; // Number of columns increases with each row
        arr[i] = [];
        for (let j = 0; j < cols; j++) {
            arr[i][j] = (i + 1) * (j + 1);  // Filling with some values
        }
    }
    return arr
};

let numRows = 5
let x = generate(numRows);

console.log(x)
