/**
 * @param {number[]} nums
 * @return {number}
 */


var countHillValley = function(nums) {
   
     let count = 0; 
    let prev = nums[0]
     for(let i =1 ; i< nums.length;i++){
           
        if (nums[i] === nums[i + 1]) continue;

       
        if ((nums[i] > prev && nums[i] > nums[i + 1]) ||  
            (nums[i] < prev && nums[i] < nums[i + 1])) {  
            count++; 
            prev = nums[i]; 
        }
    }

    return count;
};
let nums = [2,4,1,1,6,5]
let x  = countHillValley(nums);
console.log(x);