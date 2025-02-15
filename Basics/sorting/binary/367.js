/**
 * @param {number} num
 * @return {boolean}
 */



var isPerfectSquare = function(num) {
    let start = 0, end = (Math.floor(num/2))
    
    while (start <= end) {
 
      
        let mid = Math.floor((start + end) / 2);
        
        //  console.log(mid)
        if ((mid *mid) === num) {
            // console.log(mid)
           return true
        }

     
        else if (mid < num && mid*mid>num)
            start = mid + 1;
        else
            end = mid - 1;
      
    }

    return false;
};
let p = 25
const x = isPerfectSquare(p)
console.log(x)