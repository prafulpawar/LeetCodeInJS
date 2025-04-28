
// let a = [1, 2, 3, 1, 1, 1, 1];

let a = [1,2,3]
let k = 3;
let sum = 0;
    for(let i =0;i<a.length;i++){
        for(let j=i; j<a.length;j++){
              let arr = [];
              let sum = 0;
              for(let m = i; m<=j; m++ ){
                  arr.push(a[m]);
                  sum += a[m]
              }
              console.log(arr,' ',sum)
        }
        
    }