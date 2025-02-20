/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let charCount = new Map();
    for (let char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    
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

// Count Frequencies: Use a hashmap to count occurrences of each character.
// Build the Palindrome:
// Any character that appears an even number of times can be fully used.
// If a character appears an odd number of times, we can use the even part of it.
// We can add one odd character in the center of the palindrome.
