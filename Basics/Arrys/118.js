
/**
 * @param {number} numRows
 * @return {number[][]}
 */

function fact (numRows,cols){
    
  function calculateFactorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  
  let factNumRows =  calculateFactorial(numRows);
  let factCol = calculateFactorial(cols);
  let factRowCol = calculateFactorial(numRows - cols);
  let ans = factNumRows / (factCol - factRowCol);

  console.log(factNumRows,factCol,factRowCol)
  console.log(ans)
  
}
var generate = function (numRows) {
    const arr = [];
    

    // Dynamically filling rows and columns
    for (let i = 0; i < numRows; i++) {
        const cols = i + 1; // Number of columns increases with each row
        arr[i] = [];
        for (let j = 0; j < cols; j++) {
              let a = fact(numRows,j)
            //   console.log(a)
            // arr[i][j] = (i + 1) * (j + 1);  // Filling with some values
        }
    }
    return arr
};

let numRows = 5
let x = generate(numRows);

console.log(x)
