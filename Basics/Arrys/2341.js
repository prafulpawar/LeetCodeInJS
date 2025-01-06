/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    nums = nums.sort()  
    let count =0;
    let pair = 0;

    for(let i=0; i<nums.length;i=k){
        if(nums[i] !== nums[i+1] ){
            k=i+1;
            count++;
        }
        else{
            pair++
            k=i+2
        }
    }
   return [count,pair]
   
};

let nums = [1,3,2,1,3,2,2]; 
let x  = numberOfPairs(nums)
console.log(x);