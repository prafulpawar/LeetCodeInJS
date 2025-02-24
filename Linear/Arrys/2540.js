/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2); // Calculate mid

        if (arr[mid] === target) { 
            return arr[mid]; // Target found
        } else if (arr[mid] < target) {
            low = mid + 1; // Search in the right half
        } else {
            high = mid - 1; // Search in the left half
        }
    }
   
    return -1; // Target not found
}

var getCommon = function(nums1, nums2) {
    let temp = Number.MAX_SAFE_INTEGER + 1;
     for(let i=0; i<nums1.length; i++) {
        let x=binarySearch(nums2,nums1[i]);
        if(x>0){
            if(temp>nums1[i]){
                temp = nums1[i];
            }
        }
     }
     if(temp === Number.MAX_SAFE_INTEGER + 1 ){
        return -1;
     }
     else{
        return temp;
     }
     
};

let nums1 = [1,2,3]
let nums2 = [2,4]
let ans = getCommon(nums1,nums2);
 console.log(ans);