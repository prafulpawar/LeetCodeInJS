/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0; // If the array is empty, return 0

    let i = 0; // Pointer to keep track of the last unique element
    
    for (let j = 1; j < nums.length; j++) {
        // If we find a new unique element
        if (nums[j] !== nums[i]) {
            i++; // Move pointer i to the next position
            nums[i] = nums[j]; // Update the value at i with the new unique element
        }
    }

    return i + 1; // Return the number of unique elements
};
