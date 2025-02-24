/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function(s, target) {
  // Step 1: Count frequencies of letters in s
  const freqS = {};
  for (const char of s) {
      freqS[char] = (freqS[char] || 0) + 1;
  }
  console.log(freqS)

  // Step 2: Count frequencies of letters in target
  const freqTarget = {};
  for (const char of target) {
      freqTarget[char] = (freqTarget[char] || 0) + 1;
  }
  console.log(freqTarget)

  // Step 3: Calculate the maximum number of copies
  let minCopies = Infinity;
  for (const char of Object.keys(freqTarget)) {
      if (!freqS[char]) {
          // If a character in target is not in s, we cannot form even one copy
          return 0;
      }
      const possibleCopies = Math.floor(freqS[char] / freqTarget[char]);
      minCopies = Math.min(minCopies, possibleCopies);
  }

  return minCopies;
};

let s ="abbaccaddaeea"
let target ="aaaaa"
let x = rearrangeCharacters(s, target);
console.log(x)
