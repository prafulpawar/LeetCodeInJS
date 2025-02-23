/**
 * @param {number[]} nums
 * @return {number}
 */

var mostFrequentEven = function(nums) {
    let map = new Map();
    
    // Count frequency of even numbers
    for (let value of nums) {
        if (value % 2 === 0) {
            map.set(value, (map.get(value) || 0) + 1);
        }
    }

    let maxValue = 0;  // Max frequency
    let minKey = -1;   // Smallest number with max frequency
    
    for (let [key, value] of map.entries()) {
        if (value > maxValue || (value === maxValue && key < minKey)) {
            maxValue = value;
            minKey = key;
        }
    }

    return minKey;
};

let nums = [0,1,2,0,0,0,2,4,4,1]

let x = mostFrequentEven(nums);
console.log(x);