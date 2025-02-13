/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
   
    let newArr = []
    let start = 0, end = nums.length - 1;
    
    while (start <= end) {
      
        let mid = Math.floor((start + end) / 2);

        
        if (nums[mid] === target) {
           
          return  newArr.push(mid)
        
        } 

        else if (nums[mid] < target  )
            start = mid + 1;
        else
            end = mid - 1;
    }
     console.log(newArr)
   if(newArr.length<0){
      return [-1,-1]
   }
   else{
    return newArr
   }
};

let x  = searchRange([5,7,7,8,8,10],8)
console.log(x)