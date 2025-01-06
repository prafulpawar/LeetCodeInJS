var divideArray = function(nums) {
    nums = nums.sort();
    let flag = false;
    let k=1
    for(let i=0; i<nums.length;i=i+2){
        if(nums[i] !== nums[i+1] ){
            return flag;
        }
    }
    flag = true;
    return flag;  
};

let nums = [9,4,18,3,2,6,18,15,7,15,6,4,15,14,7,4,15,4,3,17,9,13,13,12,2,14,12,17]; 
let x  = divideArray(nums)
console.log(x);