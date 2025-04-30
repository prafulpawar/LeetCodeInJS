function fact(n){

    if(n===0){
      return 1;
    }
     
   return n* fact(n-1)

}
let n = 5
let ans = fact(n)

console.log(ans)

function sum (n){
    if(n===1){
       return 1;
    }
    return n+sum(n-1); // Backtraking
}

let sumans = sum(n);
console.log(sumans);