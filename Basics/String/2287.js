function calculateCharFrequency(str) {
    const frequency = {};
  
    for (const char of str) {
      if (frequency[char]) {
        frequency[char]++;
      } else {
        frequency[char] = 1;
      }
    }
  
    return frequency;
  }
  
  

var rearrangeCharacters = function(s, target) {
    let x = calculateCharFrequency(s)
    console.log(x);
    
};

let s = "ilovecodingonleetcode"
let target ="code"
let x = rearrangeCharacters(s,target)
console.log(x)