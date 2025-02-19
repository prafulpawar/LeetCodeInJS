/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let map = new Map();
    let ans = [];
for (let i = 0; i <nums1.length; i++) {
    if (map.has(nums1[i])) {
        map.set(nums1[i], map.get(nums1[i]) + 1);
    } else {
        map.set(nums1[i], 1);
    }
}
  return map;
     
};


let  nums1 = [4,9,5], nums2 = [9,4,9,8,4]


let x  = intersect(nums1,nums2)
console.log(x);