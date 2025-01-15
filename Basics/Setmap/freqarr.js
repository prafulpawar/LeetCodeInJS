let arr = [2,1,2,3,1,1,2,2,3,5,6,7,6]
let map = new Map()

for(let i=0;i<arr.length;i++){
     if(map.has(arr[i])){
        map.set(arr[i], map.get(arr[i])+1) 

     }
     else{
         map.set(arr[i], 1)
     }
}
console.log(map)