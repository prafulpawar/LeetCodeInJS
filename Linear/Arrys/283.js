/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let j=1
    for(let i=0;i<nums.length;i++){
        if(nums[i]===0){
            temp = nums[i]
            nums[i] = nums[j];
            nums[j] = temp
            j++
        }
    }
    console.log(nums)

};
let nums = [0,1,0,3,12]
let x = moveZeroes(nums)
console.log(x);

