/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n===0){
        return 1;
    }
      if(n%2===0){
        return n%2
      }
      
    return isPowerOfTwo()

};

let n =  16
let x =  isPowerOfTwo(n)
console.log(x)