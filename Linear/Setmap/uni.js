let arr = [2,4,2,1,5,4,6,7,6,4,6]
let map = new Map()

for(let i=0;i<arr.length;i++){
    map.set(arr[i], (map.get(arr[i]) || 0) + 1)  //single line
}
// for(let i=0;i<arr.length;i++){
//       if(map.get(arr[i]) === 1){
//          console.log(arr[i])  
//     }
   
// }

//Another Way
for(let a of map.keys()){
    if(map.get(a)===1){
        console.log(a)
    }
 
}


// console.log(map)