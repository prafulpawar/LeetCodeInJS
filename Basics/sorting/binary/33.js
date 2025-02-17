/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0;
    let r  = nums.target-1;
     while(l<=r){
        let mid = Math.floor((l + r) / 2);

        if (nums[mid] === target) {
            p = mid;  
            start = mid + 1;  
        } else if (nums[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
     }
    
};