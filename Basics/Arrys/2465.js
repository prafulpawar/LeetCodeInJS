/**
 * @param {number[]} nums
 * @return {number}
 */

function countDistinctNumbers(arr) {
    const distinct = arr.filter((value, index, self) => self.indexOf(value) === index);
    return distinct.length;
}

var distinctAverages = function(nums) {
    nums = nums.sort((a, b) => a - b)
    console.log(nums)
    let size = nums.length-1
    let avg = []
    for(let i=0;i<nums.length;i++){
        let sum = (nums[i]+nums[size] )
        avg.push(sum/2)
        size--
    }
    
   let x = countDistinctNumbers(avg)
   return x
};

let nums = [1,100]
let x = distinctAverages(nums)
console.log(x);
