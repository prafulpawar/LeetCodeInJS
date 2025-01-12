/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    let newArr = [];
      for(let i=0;i<nums.length;i++){
  
         if( Number(nums[i]) % 2 === 0 && Number(nums[i])>0 ){
                 newArr.push(nums[i]);
         }
      }
      
     let min = Math.min(...newArr)

     if(min ===Infinity){
        return -1
     }
     else{
        return min
     }
};

let nums = [4,4,4,9,2,4]
let x    = mostFrequentEven(nums);
console.log(x);