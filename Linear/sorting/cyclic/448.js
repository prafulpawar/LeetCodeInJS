var findDisappearedNumbers = function(nums) {
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


 let ans = [];
 for (let j = 0; j < nums.length; j++) {
     if(j+1!=nums[j]){
         ans.push(j+1)
     }
 }
 return ans
};