/**
 * @param {string} num
 * @return {boolean}
 */


var digitCount = function(num) {
   for(let i=0;i<num.length;i++){
       let count = 0;
        for(let j=0;j<num.length;j++){
             if(i == Number(num[j])){
                count++;
             }
        }
        if(num[i] !== String(count)){
            return false;
        }
       
   }
   return true;
};

let num = '030'
let x = digitCount(num)
console.log(x);