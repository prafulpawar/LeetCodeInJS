/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {

    let prefix = [];
    prefix[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1]
    }
    let sufix = [];
    sufix[nums.length - 1] = 1; 

    for (let i = nums.length - 2; i >= 0; i--) {
        sufix[i] = sufix[i + 1] * nums[i + 1];
    }
    let ans = []
    for(let i=0;i<nums.length;i++){
        ans.push(prefix[i]*sufix[i])
    }
    return ans;
};

let nums = [1, 2, 3, 4]
let x = productExceptSelf(nums)
console.log(x)