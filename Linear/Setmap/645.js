/**
 * @param {number[]} nums
 * @return {number[]}
 */


function findMostOccurringNumber(arr) {
    if (arr.length === 0) return null;

    const countMap = new Map();
    let mostOccurringNumber = null;
    let maxCount = 0;

    
    for (const num of arr) {
        countMap.set(num, (countMap.get(num) || 0) + 1);

        if (countMap.get(num) > maxCount) {
            maxCount = countMap.get(num);
            mostOccurringNumber = num;
        }
    }

    return mostOccurringNumber;
}
var findErrorNums = function (nums) {
    let x = findMostOccurringNumber(nums)
    let returnArr=[];
    returnArr.push(x);
    let set = new Set(nums)
    let array = Array.from(set);
    array.sort((a, b) => a - b);
    let k=1
    for (let i = 0; i < nums.length+1; i++) {
         if(array[i]!==k){
            returnArr.push(k);
             break;
         }
         k++
    }
    return returnArr
};

let nums =[1,1]
let x = findErrorNums(nums);
console.log(x)