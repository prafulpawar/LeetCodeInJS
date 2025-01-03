let prompt = require('prompt-sync')();
let size = Number(prompt('Size Is: '));
let nums = [];
for (let i = 0; i < size; i++) {
    nums.push(Number(prompt(`Enter element ${i + 1}: `)));
}


function minA(nums) {
    let min = Number.MAX_SAFE_INTEGER;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < min) {
            if (nums[i] > 0) {
                min = nums[i]
            }
        }
    }
    
    return min
}


function getUniqueValues(arr) {
    return [...new Set(arr)];
  }

var minimumOperations = function (nums) {
    if (nums.length === 1) {
        if (nums[0] > 0) {
            return 1
        }
        else {
            return 0
        }
    }
    
    let count = 0
    nums= getUniqueValues(nums)
    for (let i = 0; i < nums.length; i++) {
          
          let min = minA(nums)

        for (let j = 0; j < nums.length; j++) {
            if (nums[j] > 0) {
                nums[j] = nums[j] - min
                 if(nums[j] === 0){
                    count++;
                 }
            }  
            
        }
      
    }
    return count
};

let result = minimumOperations(nums);
console.log('Minimum operations needed:', result);