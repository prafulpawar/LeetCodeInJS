/**
 * @param {number} n
 * @return {boolean}
 */
function sum (n) {
    let sum = 0;
     while(n>0){
          let ld = n % 10;
          sum += ld*ld; 
         n=Math.floor(n/10);
     }
     return sum
 }

var isHappy = function(n) {
     let set = new Set();

    while (n !== 1 && !set.has(n)) {
        set.add(n);
        n = sum(n);
    }

    return n === 1;
};