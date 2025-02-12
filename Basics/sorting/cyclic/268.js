/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let i = 0
    while (i < nums.length) {
        let index = nums[i];
        if (nums[i] != nums[index]) {
            temp = nums[i];
            nums[i] = nums[index];
            nums[index] = temp;
        }
        else {
            i++
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != i) {
            return i
        }
    }
  return nums.length
};
let nums = [3, 0, 1]
let n = missingNumber(nums)
console.log(n)