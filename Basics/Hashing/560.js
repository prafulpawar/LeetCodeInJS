/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let map = new Map();
    for (let values of nums) {
        map.set(values, (map.get(values) || 0) + 1);
    }
     console.log(map)
    let sum = 0;
    let count = 0;
    let i =0;
    for (const [key, value] of map.entries()) {
          if(key === k){
             sum=sum+1;
          }
          else{
               map.set(nums[i],(map.get(i) ||0 +1))
          }
      }
      return sum;
};


let nums = [9, 4, 20, 3, 10, 5], k = 33;
let ans =subarraySum(nums,k)
console.log(ans)