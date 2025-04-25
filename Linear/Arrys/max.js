let arr = [1,2,3,4,5];
let max = 0;
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}


// Second Max 
// Approch It Shuld Be Less Then Great An Great Then  Its New Question
let m =Math.max(arr[0],arr[1]);
let s =Math.min(arr[0],arr[1]);


for(let i=2;i<arr.length;i++){
     if(arr[i]>m){
           s=m;
           m=arr[i]
     }    
     else{
        s=arr[i]
     } 
}

console.log(m ,s);