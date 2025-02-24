/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let sum=0;
    let digits=0;
    for(let i = 0; i < nums.length; i++) {
        let x = nums[i];
        sum+=x;
        if(x<10){
            digits+=x
        }
        else{
            while (x > 0) {
                let digit = x % 10; 
                digits+=digit
                x = Math.floor(x / 10);
            }
        }
    }
    console.log(digits, ' ',sum);
    return sum - digits;
};
let x = nums = [1,15,6,3]
let ans = differenceOfSum(nums);
console.log(ans); 