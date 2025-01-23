/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    

     if(n===0){
         
         return 1;
     }
     console.log(n)


    return isPowerOfTwo(n=n/2)

};

let n =  16
let x =  isPowerOfTwo(n)
console.log(x)