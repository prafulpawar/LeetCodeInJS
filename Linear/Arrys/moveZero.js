let arr = [1,1,0,1,1,0,0];

//  Using Two Pointer
let i = arr[0];
let j = arr[0];
for(let i =0 ;i<arr.length;i++){
       if(arr[i]===0){
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
          j++
       }
       i++
}

console.log(arr)