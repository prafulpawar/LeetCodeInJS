/**
 * @param {number[]} nums
 * @return {number[]}
 */
nums = [4,3,2,7,8,2,3,1];
var findDisappearedNumbers = function (nums) {
    let i = 0
    while (i < nums.length) {
        let correctIndex = nums[i];
        if (nums[i] != nums[correctIndex]) {
            let temp = nums[i];
            nums[i] = nums[correctIndex];
            nums[correctIndex] = temp
        }
        else i++
    }


    let k = nums.length;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === undefined) {
            k = i
        }
    }
    return i
};

let x = findDisappearedNumbers()