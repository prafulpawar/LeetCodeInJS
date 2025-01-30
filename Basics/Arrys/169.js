/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    majority = Math.floor(nums.length/2);
    for(let i=0;i<nums.length;i++){
        let count=0;
        for(let j=0;j<nums.length;j++){
             if(nums[i] === nums[j]){
                count++;
             }
        }
        if(count>majority){
            return nums[i]
        }
    }
};


let nums = [6,5,5];
let ans  = majorityElement(nums)
console.log(ans)
