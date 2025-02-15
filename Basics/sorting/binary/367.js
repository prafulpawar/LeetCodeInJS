/**
 * @param {number} num
 * @return {boolean}
 */



var isPerfectSquare = function(num) {
    let start = 0, end = Math.floor(num/2);

    while (start <= end) {

      
        let mid = Math.floor((start + end) / 2);

        
        if (arr[mid] === x) return true;

     
        else if (arr[mid] < x)
            start = mid + 1;
        else
            end = mid - 1;
    }

    return false;
};
let p = 16
const x = isPerfectSquare(p)
console.log(x)