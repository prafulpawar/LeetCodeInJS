/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let sum = 0;
    let maxLength = 0;
    let map = new Map();
    map.set(0, -1); 
    
    for (let i = 0; i < nums.length; i++) {
       
        sum += nums[i] === 0 ? -1 : 1;
        
   
        if (map.has(sum)) {
            maxLength = Math.max(maxLength, i - map.get(sum));
        } else {
           
            map.set(sum, i);
        }
    }
    
    return maxLength;
};

let nums = [0,0,1,0,0,0,1,1]
let ans = findMaxLength(nums)
// console.log(ans)