let n = 19;
let digit = 0;
let sum = 0;
while(n>0){
    let ld = Math.floor(n%10);
     sum += ld*ld; 
     n=Math.floor(n/10);
     if(n!==1){
        n = sum;
        sum = 0;
     }
}
console.log(sum)