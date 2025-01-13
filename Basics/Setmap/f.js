let set = new Set();

set.add(  10   )
set.add(  20   )
set.add(  30   )
set.add(  10   )
set.add(  true )
set.add(  30   )
set.add(  true )
set.add(  40   )

console.log(    set            )
console.log(    set.has(100)   ) 
console.log(    set.size       )
console.log(    set.delete(10) )
console.log(    set.clear()    )
console.log(    set            )
// It Contain Only Unique Values 

let arr = [10,20,30,40,50,60,70,80,90,100,100,100,100,100,100,100,100]

let ans = new Set(arr)
console.log(ans)