/**
 * @param {number[]} nums
 * @return {number}
 */




var mostFrequentEven = function (nums) {
    let newArr = [];
    for (let i = 0; i < nums.length; i++) {

        if (Number(nums[i]) % 2 === 0) {
            newArr.push(nums[i]);
        }
    }
    if (newArr.length === 0) {
        return -1
    }

    

};

let nums =[0,1,2,0,0,0,2,4,4,1]
let x = mostFrequentEven(nums);
console.log(x);