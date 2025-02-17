/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);

        if (nums[mid] === target) return mid;

        // Left half is sorted
        if (nums[l] <= nums[mid]) {
            if (nums[l] <= target && target < nums[mid]) {
                r = mid - 1; // Move left
            } else {
                l = mid + 1; // Move right
            }
        } 
        // Right half is sorted
        else {
            if (nums[mid] < target && target <= nums[r]) {
                l = mid + 1; // Move right
            } else {
                r = mid - 1; // Move left
            }
        }
    }
    return -1; // Target not found
    
};

let nums = [4,5,6,7,0,1,2], target = 0
let x = search(nums,target)
console.log(x)