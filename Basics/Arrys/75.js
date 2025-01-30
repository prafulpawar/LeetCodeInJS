/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let i =0;
  let j = 0
  let k = nums.length-1
  while(i<=k){
     if(nums[i]==0){
        swap(nums,i,j);
        i++
        j++
     }
     else if(nums[i]===2){
         swap(nums,i,k)
         k--;
     }
     else{

         i++;
     }
  }
};

function swap(nums,a,b){
 let temp = nums[a];
 nums[a] = nums[b]
 nums[b] = temp
}
let nums = [2,0,2,1,1,0]
sortColors(nums)