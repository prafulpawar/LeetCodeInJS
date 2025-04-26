let str = 'abcdadbs'

const freq = {};

for(let char of str){
     if(char!==' '){
        freq[char] = (freq[char] || 0) +1;
     }
}
console.log(freq)

//  const frequencyMap = {};
//   for (const element of arr) {
//     frequencyMap[element] = (frequencyMap[element] || 0) + 1;
//   }
//   return frequencyMap;