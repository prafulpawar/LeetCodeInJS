// function gcd(a,k){
//    if(k>a){
//       return 1;
//    }
//    if(a%k===0){
//     //  console.log(k)
//    }
//    return  gcd(a,k=k+1)
// }

let n=100
let k= 1
// let x = gcd(n,k)
// // console.log(x)
//  factor(a,k)
// function factor(n,i){
//     if (i > n) return; 
//     if (n % i === 0) {
//         console.log(i); 
//     }
//     factor(n, i + 1); 
    
// }
let i=0;
//  i*i<=n
//  Math.sqr(n) both are same

for(i = 1; i*i<n;i++){
    if(n%i===0){
        console.log(i)
    }
}
if((i-n/i)==1) i--
for(;i>=1;i--){
    if(n%i===0){
        console.log(n/i)
    }
   
}