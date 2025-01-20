// function main(){
//     greet()
//     console.log("Main chala....")
// }
// function greet(){
//     //  console.log(enjoy())
//      console.log("Good Morning pipeline....")
// }

// function enjoy(){
//     //   return 10
//       console.log("Enjoy Ho Raha Hai Guys....")
// }

// main()

// function abcd(n){
//       if(n===0){
//         return 
//       }
//       console.log(n)
//       abcd(n-1)
// }
// let n = 10;
// abcd(10);

let prompt = require('prompt-sync')();
// let size = Number(prompt('Size Is: '));
// function abcd(n,k){
//     if(k>=n+1){
//       return 
//     }
//     console.log(k)
//     abcd(n,k=k+1)
// }
// abcd(size,1);


let size = Number(prompt('Size Is: '));
function abcd(n){
    if(n===1){
      return 
    }
     abcd(n=n-1)
    console.log(n)
}
let x = abcd(size+1);