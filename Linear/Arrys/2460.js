/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    if(nums.length === 2){
        if(nums[0]===0){
            return [nums[1],nums[0]]
        }
        else{
            return [nums[0],nums[1]]
        }
        
    }
      let res = [];
      let count =0;
      for(let i=0;i<nums.length;i++){
          if(nums[i] !==0 ){
            if(nums[i] === nums[i+1] ){
                res.push(nums[i]*2);
                nums[i+1]=0
                count++;
            }
            else{
                res.push(nums[i]);
                count++;
            }
          }
      }
 
      console.log(res);

     for(let i=count;i<nums.length;i++){
           res[i]=0;
     }
      return res
};

let nums =  [2,1]
let x = applyOperations(nums)

console.log(x);