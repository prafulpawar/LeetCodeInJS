// // Using Two Pointer
let arr = [1,2,3,4,5,6];
// let l = arr.length-1

// for(let i =0;i<arr.length/2;i++){
//       let temp = arr[i];
//        arr[i] = arr[l];
//        arr[l] = temp;
//        l--;
// }

// Another Way Using Arrys Destrucring 
let i = 0;
let j =  arr.length-1
while(i<j){
      [arr[i] , arr[j]] = [arr[j] ,arr[i]]
      j--;
      i++;
}
console.log(arr)