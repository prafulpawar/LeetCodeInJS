let prompt = require('prompt-sync')();
let row = Number(prompt('Row Size Is: '));
let col = Number(prompt('Col Size Is: '));

let arr = Array.from({ length: row }, () => Array(col));

for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        arr[i][j] = Number(prompt(`Enter element at (${i}, ${j}):`));
    }
}

let leftSum=0;
let rightSum=0;
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
         if(i===j) leftSum+=arr[i][j];
         if(i+j===arr.length-1) rightSum+=arr[i][j];
    }
}

console.log(leftSum);
console.log(rightSum);