let arr = [5,6,7,8,9,1,2,3,5,7];

let i =0
while(i<arr.length){
      let correctIndex = arr[i]-1;
      if(arr[i]!=arr[correctIndex]){
         let temp = arr[i];
         arr[i] = arr[correctIndex];
         arr[correctIndex] = temp
      }
      else i++
}
console.log(arr)