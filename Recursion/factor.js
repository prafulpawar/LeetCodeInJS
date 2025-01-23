function gcd(a,k){
   if(k>a){
      return 1;
   }
   if(a%k===0){
    //  console.log(k)
   }
   return  gcd(a,k=k+1)
}

let a=24
let k= 1
let x = gcd(a,k)
// // console.log(x)
//  factor(a,k)
// function factor(n,i){
//     if (i > n) return; 
//     if (n % i === 0) {
//         console.log(i); 
//     }
//     factor(n, i + 1); 
    
// }

let p = Math.sqrt(a);
for(let i=1;i<=Math.floor(p);i++){
    if(a%i===0){
        console.log(i)
    }
}