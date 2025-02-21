/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    // let sum = 0;
    // let count = 0;
    // let map = new Map();
    // map.set(0, 1);

    // for (let i = 0; i < nums.length; i++) {
    //     sum += nums[i];
    //     let rem = sum - k;

    //     if (map.has(rem)) {
    //         count += map.get(rem);
    //     }

    //     map.set(sum, (map.get(sum) || 0) + 1);
    // }

    // return count;

    //  Brut Force Solution
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        let subArray = []; 
        for (let j = i; j < nums.length; j++) {
            subArray.push(nums[j]);
              let sum =0;
               for(let k=0; k<subArray.length;k++){
                   sum=sum+nums[k]
               }
               if(sum===k){
                count++;
               }
               console.log(subArray,' ',sum)
        }
    }
   return count
};


let nums = [-1,-1,1], k = 0;
let ans = subarraySum(nums, k)
console.log(ans)

