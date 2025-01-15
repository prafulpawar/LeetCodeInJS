var sumOfUnique = function(nums) {
    let map = new Map()

    for(let i=0;i<nums.length;i++){
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)  
    }
    let sum = 0;
    for (let [key, value] of map) {
         if(value===1){
            sum += key;
         }
    }
    return sum;
};

let nums = [1,1,1,1,1]

let x  = sumOfUnique(nums)
console.log(x)