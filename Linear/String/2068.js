/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function (word1, word2) {
    const frequency1 = new Array(26).fill(0);
    const frequency2 = new Array(26).fill(0);

    // Calculate frequency for word1
    for (let char of word1) {
        const index = char.charCodeAt(0) - 97; // Assuming lowercase letters
        frequency1[index]++;
    }

    // Calculate frequency for word2
    for (let char of word2) {
        const index = char.charCodeAt(0) - 97; // Assuming lowercase letters
        frequency2[index]++;
    }

    for(let i=0;i<frequency1.length;i++) {
        if(Math.abs(frequency1[i] - frequency2[i]) >3 )  {
               return false
        }
    }
    return true;
    
};

let word1 = "abcdeef", word2 = "abaaacc"
let x = checkAlmostEquivalent(word1, word2)
console.log(x);