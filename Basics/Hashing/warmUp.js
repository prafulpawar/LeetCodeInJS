let arr  = [2,1,4,1,2,2,3,1]
let s    = new Set(arr);
console.log(s)
for(let  i =0 ;i<arr.length;i++){
      if(s.has(arr[i])){
        console.log(s)
      }
}