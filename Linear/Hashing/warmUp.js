let arr = [2, 1, 4, 1, 2, 2, 3, 1];
let map = new Map();

for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
        map.set(arr[i], map.get(arr[i]) + 1);
    } else {
        map.set(arr[i], 1);
    }
}

console.log(map);
