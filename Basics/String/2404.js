/**
 * @param {number[]} nums
 * @return {number}
 */


function countFrequency(arr) {
    const frequency = {};
    for (let item of arr) {
        frequency[item] = (frequency[item] || 0) + 1;
    }
    return frequency;
}
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

    let obj =  countFrequency(newArr)
    console.log(obj) 
   
   
    


};

let nums =[2,10000,10000,10000,2]
let x = mostFrequentEven(nums);
console.log(x);