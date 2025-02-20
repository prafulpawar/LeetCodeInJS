/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let charCount = new Map();
    for (let char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    console.log(charCount)
    
    let maxLength = 0;
    let hasOdd = false;
    
    for (let count of charCount.values()) {
        if (count % 2 === 0) {
            maxLength += count;
        } else {
            maxLength += count - 1;
            hasOdd = true;
        }
    }
    
    return hasOdd ? maxLength + 1 : maxLength;
};

let  s = "abccccdd"
let x  = longestPalindrome(s);
console.log(x)