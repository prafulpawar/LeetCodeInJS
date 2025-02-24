function printSubarrays(arr) {
    let n = arr.length;
    
    // Iterate over all possible starting points
    for (let start = 0; start < n; start++) {
        let subArray = [];
        
        // Iterate over all possible ending points
        for (let end = start; end < n; end++) {
            subArray.push(arr[end]);
            console.log(subArray);
        }
    }
}

// Example usage
const arr = [1, 2, 3];
printSubarrays(arr);
