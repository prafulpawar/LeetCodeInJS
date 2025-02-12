let arr = [4,3,2,7,8,2,3,1]
let i =0
while(i<arr.length){
       let index = arr[i]-1;
       if(arr[i]!= arr[index]){
            temp = arr[i];
            arr[i] = arr[index];
            arr[index] = temp;
       }
       else{
            i++
       }
      
}
console.log(arr)
let nums = []
for(let i=0;i<arr.length;i++){
    if(arr[i] !== i+1){
        nums.push(arr[i])
    }
  }

   console.log(nums)

