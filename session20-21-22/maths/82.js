function sum(a,sums){
      if(a<1){
         return sums;
      }
      return sum(a=Math.floor(a/10),sums+1);

}

let a = 1234;
let sums = 0;
let ans = sum(a,sums);
console.log(ans)