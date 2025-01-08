/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function(nums) {
    nums.sort((a,b) => a - b)  // sorting the array in ascending order
    let count =0
    for(let i =0 ; i < nums.length-1 ; i++) {
        for(let j = i+1  ; j < nums.length ; j++) {
            for(let k = j+1 ; k < nums.length ;k++){
                if(nums[i]!==nums[j] && nums[j]!==nums[k] && nums[i]!==nums[k]){
                    count++
                }
            }
        }
    }
    return count;
};

let nums = [4,4,2,4,3]
let x  = unequalTriplets(nums)
console.log(x)