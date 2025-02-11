let arr = [9,6,4,2,3,5,7,8,1]
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