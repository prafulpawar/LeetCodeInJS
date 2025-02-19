/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let s = new Set(nums1)
    let s2 = new Set(nums2)
    let newArr= [];
    for (let num of s) {
        if(s2.has(num)){
          newArr.push(num)
        }
    }

    return newArr
    
};

let nums1 = [1,2,2,1], nums2 = [2,2]
let x = intersection(nums1,nums2);
console.log(x);