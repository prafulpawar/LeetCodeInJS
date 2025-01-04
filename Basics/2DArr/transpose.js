let prompt = require('prompt-sync')();
let row = Number(prompt('Row Size Is: '));
let col = Number(prompt('Col Size Is: '));

let arr = Array.from({ length: row }, () => Array(col));

let arr2 = Array.from({ length: row }, () => Array(col));

for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        arr[i][j] = Number(prompt(`Enter element at (${i}, ${j}):`));
    }
}

for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
       arr2[i][j]=arr[j][i]
    }
    console.log('\n')
}
console.log(arr2)



for(let i=0;i<arr.length;i++){
    for(let j=i;j<arr[i].length;j++){
      let temp=arr[j][i]
      arr[j][i]=arr[i][j]
      arr[i][j]=temp
    }
    console.log('\n')
}
console.log(arr)