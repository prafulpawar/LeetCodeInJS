/**
 * @param {number[]} nums
 * @return {number}
 */
function gcd(a,b){
    if(b==0) return a;
    return gcd(b,a%b);
}
var findGCD = function(nums) {
  let min=+Infinity;
  let max=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]>max){
          max=nums[i];
        }
        if(nums[i]<min){
           min=nums[i]
        }
    }
    console.log(min,max)
    let ans = gcd(max,min);
    return ans;
};