/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let map = new Map();

    for (let i = 0; i <s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
    }
    console.log(map)

};

let  s = "abccccdd"
let x  = longestPalindrome(s);
console.log(x)