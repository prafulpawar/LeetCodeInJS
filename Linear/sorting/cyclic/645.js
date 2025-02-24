/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let i = 0
    while (i < nums.length) {
        let correct = nums[i]-1;
        if (nums[i] != nums[correct]) {
            let temp = nums[i];
            nums[i] = nums[correct];
            nums[correct] = temp
        }
        else i++
    }
     let arr = []
     console.log(nums)
    for(let i=0;i<nums.length;i++){
         
         if(nums[i] !==i+1  ){
            arr = [nums[i], i + 1];  
            break;
         }
    }
    return arr
};

let nums = [1,2,2,4]
let x =  findErrorNums(nums)
console.log(x)