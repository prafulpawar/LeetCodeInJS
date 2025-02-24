/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    let map = new Map();
    let ans = [];

    for (let i = 0; i < nums1.length; i++) {
        map.set(nums1[i], (map.get(nums1[i]) || 0) + 1);
    }

    for (let i = 0; i < nums2.length; i++) {
        if (map.has(nums2[i]) && map.get(nums2[i]) > 0) {
            ans.push(nums2[i]);
            map.set(nums2[i], map.get(nums2[i]) - 1);
        }
    }

    return ans;
};

let nums1 = [1, 2, 2, 1], nums2 = [2, 2];

let x = intersect(nums1, nums2);
console.log(x); 
