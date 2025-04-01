function pel(n){
     if(n===0){
        return 0;
     }
     let rev = n%10;
     rev+pel(Math.floor(n=n/10));
     return rev;
}
let m  = 121;
const ans = pel(m);
// console.log(ans)