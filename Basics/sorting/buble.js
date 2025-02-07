let arr = [7,8,5,6,7,1,2,7,6,2,3,7,1,7,3,3,2,5,1,2,3]

for(let i=0;i<arr.length-1;i++){

    for(let j=i+1;j<arr.length;j++){
           if(arr[i]>arr[j]){
               let temp = arr[i];
               arr[i] = arr[j];
               arr[j] = temp
           }
    }
}
console.log(arr)