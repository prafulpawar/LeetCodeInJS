/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {

    let currentSum = 0;
    for(let i =0 ;i<nums.length;i++){
       currentSum+=nums[i]
    }
    let mid = Math.floor(nums.length/2);
    let leftSum=0
    for(let i=0;i<mid;i++){
        leftSum+=nums[i]
    }

     let rightSum=0
    for(let i=mid+1;i<nums.length;i++){
        rightSum=nums[i]+rightSum
    }

    console.log(rightSum,' ',leftSum, ' ', mid)
};

let nums = [2,1,-1]
let ans = pivotIndex(nums)
console.log(ans)