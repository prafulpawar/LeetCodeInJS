/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let returnArr =[]
    let start = 0, end = nums.length - 1;
    
    while (start <= end) {
      
        let mid = Math.floor((start + end) / 2);

        
        if (nums[mid] === target) returnArr.push(mid);


        else if (nums[mid] < target)
            start = mid + 1;
        else
            end = mid - 1;
    }
   if(returnArr.length<0){
      return returnArr[-1,-1]
   }
   else{
    return returnArr
   }
};

let x  = searchRange([5,7,7,8,8,10],8)
console.log(x)