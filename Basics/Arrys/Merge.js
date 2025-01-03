var merge = function (nums1, m, nums2, n) {
    let i = m - 1; // Pointer for nums1 (valid elements)
    let j = n - 1; // Pointer for nums2
    let k = m + n - 1; // Pointer for the merged array (end of nums1)

    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i]; // Place the larger element at the end
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    // If elements are left in nums2, copy them
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
  
};


let nums1 = [4, 0, 0, 0, 0, 0,];
let m = 6;
let nums2 = [1, 2, 3,5,6];
let n = 3;


let result = merge(nums1, m, nums2, n);


console.log(result); 