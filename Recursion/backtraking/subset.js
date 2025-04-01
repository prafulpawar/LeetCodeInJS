function subsets(nums) {
    let result = [];
    let temp = [];

    function subSets(i) {
        if (i === nums.length) {
            result.push([...temp]);
            return;
        }

        // Include the current element
        temp.push(nums[i]);
        subSets(i + 1);

        // Exclude the current element
        temp.pop();
        subSets(i + 1);
    }

    subSets(0);
    return result;
}

console.log(subsets([1,2,3,4,5]));
