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

