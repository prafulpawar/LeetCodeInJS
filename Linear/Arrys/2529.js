/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let pos=0;
    let neg =0;
      for(var i = 0; i < nums.length; i++){
           if(nums[i]>0){
             pos++;
           }
           if(nums[i]<0){
             neg++;
           }
      }
      return Math.max(pos,neg);
};

let nums =[5,20,66,1314]
let ans = maximumCount(nums);
console.log(ans);

