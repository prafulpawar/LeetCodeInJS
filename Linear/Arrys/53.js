/**
 * @param {number[]} nums
 * @return {number}
 */
// this is bruthForce Approch
// var maxSubArray = function(nums) {

//     let maxSum     = 0;
//     let currentSum = 0;
    
//     for(let i=0;i<nums.length;i++){
//         currentSum=0;
//         for(let j=i; j<nums.length;j++){
//             currentSum=nums[j]+currentSum
//              if(currentSum<0){
//                 sum=0
//                 break;
//              }
//             maxSum = Math.max(maxSum,currentSum)
//             console.log(`Subarray (${i} to ${j}): Sum = ${currentSum}, Max so far = ${maxSum}`);
//         }
//     }
//     return maxSum

// };

// let nums =[2, 3, -8, 7, -1, 2, 3]
// let x = maxSubArray(nums)
// console.log(x)

// Kadane's Algorithm

var maxSubArray = function(nums) {

    let maxSum     = 0;
    let currentSum = 0;
    
    for(let i=0;i<nums.length;i++){
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum

};

let nums =[2, 3, -8, 7, -1, 2, 3]
let x = maxSubArray(nums)
console.log(x)