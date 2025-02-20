/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let sum = 0;
    let count = 0;
    let map = new Map();
    map.set(0, 1);

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        let rem = sum - k;

        if (map.has(rem)) {
            console.log(rem)
            
            count += map.get(rem);
        }

        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return count;
};


let nums = [9, 4, 20, 3, 10, 5], k = 33;
let ans =subarraySum(nums,k)
console.log(ans)