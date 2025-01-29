/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
     let counttwo=0
     let countone=0
     let countzero=0

     for(let i=0;i<nums.length;i++){
          if(nums[i]===1){
            countone++
          }
          else if(nums[i]===2){
            counttwo++
          }
          else{
            countzero++;
          }
     }
     console.log(countone,counttwo,countzero)

    //  nums.length=0;
     for(let i = 0 ;i<countzero;i++){
        nums.push[i]=0;
     }

     for(let i = countzero ;i<countone;i++){
        nums.push[i]=1;
     }

     for(let i = countone ;i<counttwo;i++){
        nums.push[i]=2;
     }
   console.log(nums)  
};
let nums = [2,0,2,1,1,0]
sortColors(nums)