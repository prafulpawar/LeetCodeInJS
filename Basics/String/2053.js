/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    let map = new Map()

    for(let i=0;i<arr.length;i++){
        map.set(arr[i], (map.get(arr[i]) || 0) + 1)  
    }
    console.log(map)
};

let arr = ["d","b","c","b","c","a"], k = 2
let x = kthDistinct(arr,k);
console.log(x);