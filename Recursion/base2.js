// n= 5 => 5*3*2*1

function fact(n){
    if(n===1){
        return 1;
    }
    return n*fact(n-1)
}
let n = 5;
const a = fact(n);
console.log(a)