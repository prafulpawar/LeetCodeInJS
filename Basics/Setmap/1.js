let arr = [10,12,10,12,4,1,2,4,2,1]

let set = new Set()
for(let i=0;i<arr.length;i++){
       if(set.has(arr[i])){
           set.delete(arr[i])
       }
       else{
          set.add(arr[i])
       }
}
console.log(set)