let arr = [9,6,4,2,3,5,7,8,1]
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