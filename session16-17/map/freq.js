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


// Another Way
let map = new Map();
for(let i=0;i<arr.length;i++){
    if(map.has(arr[i])){
        map.set(arr[i],map.get(arr[i])+1)
    }
    else{
        map.set(arr[i],i);
    }
}
