/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function (words) {
    let mySet = new Set(words)
   console.log(mySet)
    const charMap = new Map();

 //   mySet.forEach(item => {
//         item.split('').forEach(char => {
//             charMap.set(char, (charMap.get(char) || 0) + 1);
//         });
//     });
//     console.log(charMap)
//    let sum=0;
  
//    for(let w of charMap.values()){
//       if(w%2==0){
//         initials = w;
//          sum+=w
//       }
     
     
//    } 

}
let words =["ab","ty","yt","lc","cl","ab"]
let ans = longestPalindrome(words)
console.log(ans)