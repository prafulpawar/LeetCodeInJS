/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
   
  function lastIndex(nums, target) {
      let start = 0, end = nums.length - 1;
      let p = -1; 
      while (start <= end) {
          let mid = Math.floor((start + end) / 2);

          if (nums[mid] === target) {
              p = mid;  
              start = mid + 1;  
          } else if (nums[mid] < target) {
              start = mid + 1;
          } else {
              end = mid - 1;
          }
      }
      return p;
  }

  function firstIndex(nums, target) {
      let start = 0, end = nums.length - 1;
      let p = -1;
      while (start <= end) {
          let mid = Math.floor((start + end) / 2);

          if (nums[mid] === target) {
              p = mid;  
              end = mid - 1;  
          } else if (nums[mid] < target) {
              start = mid + 1;
          } else {
              end = mid - 1;
          }
      }
      return p;
  }

  let first = firstIndex(nums, target);
  let last = lastIndex(nums, target);

  return [first, last];
};

// Test cases
console.log(searchRange([5,7,7,8,8,8,10], 7));  // Output: [1,2]
console.log(searchRange([5,7,7,8,8,8,10], 8));  // Output: [3,5]
console.log(searchRange([5,7,7,8,8,8,10], 6));  // Output: [-1,-1]
console.log(searchRange([], 0));  // Output: [-1,-1]
