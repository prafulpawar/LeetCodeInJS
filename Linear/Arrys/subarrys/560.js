// 560. Subarray Sum Equals K
var subarraySum = function(nums, k) {
    let sum = 0;

    for(let i =0;i<nums.length;i++){
        for(let j=i;j<nums.length;j++){
             let subArr = [];
             let subSum = 0;
              for(let m = i ; m<=j ;m++){
                   subArr.push(nums[m]);
                   subSum += nums[m]; 
              }
              if(subSum===k){
                 sum++
              }
        }
    }
    return sum;
};
let total = 0;
for(let i =0;i<a.length;i++){
    let arr = [];
    let sum = 0;
    for(let j=i; j<a.length;j++){
          
        arr.push(a[j]);
        sum += a[j]
         if(sum===k){
            total++;
         }
          
    }
}
total