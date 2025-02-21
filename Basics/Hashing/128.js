/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let Count = new Map();
    for (let value of nums) {
        Count.set(value , true);
    }
    // console.log(Count);

    for(let [keys,values] of Count.entries()){
        
    }
};

let nums = [0,3,7,2,5,8,4,6,0,1]
let ans = longestConsecutive(nums)
console.log(ans)