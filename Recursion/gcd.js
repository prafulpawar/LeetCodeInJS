function gcd(a,b,c){
    if(c===1){
        return 1
    }
    if(a%c===0 && b%c===0){
     return c
    }

   return gcd(a,b,c-1);

}

let a=10,b=20;
let ans = Math.min(a,b);
let x = gcd(a,b,ans)
console.log(x)


let n = 5
temp(n)

function temp(n){
    if(n===0){
        return
    }
    console.log('Hello World');
    temp(n=n-1)
}

// n-- pahle aap use fir change value hongi
// n-1 