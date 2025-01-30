/**
 * @param {number[]} nums
 * @return {number}
 */
// this is bruthForce Approch
// var maxSubArray = function(nums) {

//     let maxSum     = -Infinity;
//     let sum =  -Infinity;
//     let currentSum = 0;
    
//     for(let i=0;i<nums.length;i++){
//         currentSum=0;
//         for(let j=i; j<nums.length;j++){
//             currentSum=nums[j]+currentSum
//             maxSum = Math.max(maxSum,currentSum)
//             console.log(`Subarray (${i} to ${j}): Sum = ${currentSum}, Max so far = ${}`);
//         }
//     }
//     return maxSum

// };

// let nums =[-2,1,-3,4,-1,2,1,-5,4]
// let x = maxSubArray(nums)
// console.log(x)

// Kadane's Algorithm