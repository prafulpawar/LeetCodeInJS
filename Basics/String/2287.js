function rearrangeCharacters(str, target) {
  // const frequency = new Array(26).fill(0);
  // for (let i = 0; i < str.length; i++) {
  //   if (str[i] >= 'a' && str[i] <= 'z') {
  //     const index = str[i].charCodeAt(0) - 97;
  //     frequency[index]++;
  //   }
  // }
 
  //  
  
  // for (let i = 0; i < frequency.length; i++) {
  //   if (frequency[i] > 0) {
       
  //          console.log(`Character: ${String.fromCharCode(i + 97)}, Count: ${frequency[i]}`);
  //      newArr.push(String.fromCharCode(i + 97))
      
  //   }
  // }
  function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  function findMin(arr) {
    if (arr.length === 0) {
        return null; // Handle empty array
    }
    return Math.min(...arr); // Spread operator to pass array elements
}
   target = removeDuplicates(target)
  let newArr=[]
  for(let i=0;i<target.length;i++){
    let count=0;
      for(let j=0;j<str.length;j++){
          if(target[i] === str[j] ){
            count++;
          }
      }
      newArr.push(count)
      
  } 

  if(newArr.length === 1){
     return 1
  }
  else{
    return findMin(newArr)  
  }
 



}

let s ="abbaccaddaeea"
let target ="aaaaa"
let x = rearrangeCharacters(s, target);
console.log(x)
