/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    let testArr=words
    
    let newArr=[];
     for(let i=0;i<words.length;i++){
         let j= words[i].split('').sort().join('');
         newArr.push(j);
     }
     
   let k=0
   words=[]
    for(let i=0;i<newArr.length;i++){
        if(newArr[i] !== newArr[i+1]){
            words.push(testArr[k]);
            k=i+1;
        }
        
    }
    return words;
};

let words = ["abba","baba","bbaa","cd","cd"]
console.log(removeAnagrams(words)) 
