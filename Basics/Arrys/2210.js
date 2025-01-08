/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function(nums) {
    let vally = 0;
    let hill = 0;
     for(let i =0 ; i< nums.length;i++){
        if(nums[i] > nums[i+1] && nums[i] > nums[i-1]  ){
             vally++;
        }
        if (nums[i] < nums[i-1] && nums[i] < nums[i-1]   ){
            hill++;
        }
     }
     console.log(vally, ' ',hill)
};
let nums = [2,4,1,1,6,5]
let x  = countHillValley(nums);
console.log(x);