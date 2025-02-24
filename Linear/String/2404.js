/**
 * @param {number[]} nums
 * @return {number}
 */




var mostFrequentEven = function (nums) {
  let map = new Map();
    let newArr = [];
    for (let i = 0; i < nums.length; i++) {

        if (Number(nums[i]) % 2 === 0) {
            newArr.push(nums[i]);
        }
    }
    if (newArr.length === 0) {
        return -1
    }
    for(let i=0; i<newArr.length; i++){
        map.set(newArr[i], (map.get(newArr[i]) || 0) + 1);
    }
    console.log(map)
};

let nums =[0,1,2,0,0,0,2,4,4,1]
let x = mostFrequentEven(nums);
console.log(x);