
// let a = [1, 2, 3, 1, 1, 1, 1];

let a =  [1,1,1]
let k = 2;
let sum = 0;
let max = 0;
//     for(let i =0;i<a.length;i++){
//         for(let j=i; j<a.length;j++){
//               let arr = [];
//               let sum = 0;
//               for(let m = i; m<=j; m++ ){
//                   arr.push(a[m]);
//                   sum += a[m]
//               }
//               if(sum===k){
//                   let x = arr.length;
//                    if(x>max){
//                        max=x;
//                    }
//               }
//             //   console.log(arr)
//         }
// }

console.log('---')

for(let i =0;i<a.length;i++){
    let arr = [];
    let sum = 0;
    for(let j=i; j<a.length;j++){
          
        arr.push(a[j]);
        sum += a[j]
         if(sum===k){
                 let x = arr.length;
                   if(x>max){
                       max=x;
                   }
         }
          
    }
}
console.log(sum)