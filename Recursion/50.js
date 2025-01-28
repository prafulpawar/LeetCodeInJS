/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
      if(n===0){
        return 1.0;
      }
      if(n<0) {
        ans= 1/solve(x,n)
        return ans
      }
      else{
          ans = solve(x,n)
          return ans
      }
};
function solve (x,n){
    if(n===0){
         return 1
    }

   s= solve(x,parseInt(n/2));
   if(n%2===0){
      return s*s
   }
   else{
    return s*s*x
   }

}


let x=2.0000
let n =10
let p = myPow(x,n)
console.log(p)