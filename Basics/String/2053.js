/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    let map = new Map()
    let arr2 = [];
    for(let i=0;i<arr.length;i++){
        map.set(arr[i], (map.get(arr[i]) || 0) + 1)  
    }
   
    for (let [key, value] of map) {
         if(value===1){
            arr2.push(key)
         }
    }
    for(let i=0;i<arr2.length;i++){
        if(i===k-1){
            return arr2[i]
        }
    }
    return "";
};

let arr =["d","b","c","b","c","a"], k = 2
let x = kthDistinct(arr,k);
console.log(x);