let arr= [2,3,4,5,4,3,1,1,2,3,1,2,3,3,4,]
function frequencyCounter(arr) {
    let map = new Map();
    for (let num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    return map;
}
let ans = frequencyCounter(arr);
console.log(ans)
