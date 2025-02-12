/**
 * @param {number[]} nums
 * @return {number}
 */

// var missingNumber = function(nums) {
// //     let i =0
// // while(i<nums.length){
// //       let correctIndex = nums[i];
// //       if(nums[i]!=nums[correctIndex]){
// //          let temp = nums[i];
// //          nums[i] = nums[correctIndex];
// //          nums[correctIndex] = temp
// //       }
// //       else i++
// // }
// // let k = nums.length;
// // for(let i =0;i<nums.length;i++){
// //       if(nums[i] === undefined){
// //             k=i
// //       }
// // }
// // return i
   
// }


function missingNumber(nums) {
      let i = 0;
      while (i < nums.length) {
          let correct = nums[i]; 
  
          if (nums[i] < nums.length && nums[i] !== nums[correct]) {
              // Swap nums[i] and nums[correct]
              let temp = nums[i];
              nums[i] = nums[correct];
              nums[correct] = temp;
          } else {
              i++;
          }
      }
  
      for (let j = 0; j < nums.length; j++) {
          if (nums[j] !== j) {
              return j; // Missing number found
          }
      }
  
      return nums.length; // If all numbers are correct, return the last missing number
  }
  
  // Test case
  let nums = [0, 1];
  let result = missingNumber(nums);
  console.log(result); // Expected output: 2
  

// 

