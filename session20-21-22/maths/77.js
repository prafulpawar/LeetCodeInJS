let a = 12;
let b = 18;

function gcd(a,b){
    if (b == 0) return a;
    return gcd(b, a % b);

}
let n = 1;
let ans = gcd (a,b);
console.log(ans)