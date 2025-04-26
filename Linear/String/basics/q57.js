let a = 'malayalam';
let x = a.length-1;

for(let i=0;i<a.length/2;i++){
    if(a[i]!==a[x]){
        console.log(false)
        return false
    }
    x--;
}
console.log(true)