let prompt = require('prompt-sync')();
let size = Number(prompt('Size Is: '));

let nums = [];
for (let i = 0; i < size; i++) {
    nums.push(Number(prompt(`Enter element ${i + 1}: `)));
}


var singleNumber = function(nums) {
 
    for(let i = 0; i < nums.length; i++) {
        if(nums[i]!==nums[i+1]){
            return nums[i];
        }
    }
};

let x = singleNumber(nums)
console.log(x);