let prompt = require('prompt-sync')();
let size = Number(prompt('Size Is: '));
// function abcd(n) {
//   if (n === 0 || n===1) return n;
 
//    return abcd(n-1) + abcd(n-2)
// }

// let result = abcd(size); 
// console.log("Sum is:", result); 

function abcd(n) {
    if (n === 0 || n===1) return n;
     
     return abcd(n-1) + abcd(n-2)
  }
  
  let result = abcd(size+1); 
  console.log("Sum is:", result); 