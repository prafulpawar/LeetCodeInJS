/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const word = pattern.split('')
    const sentence = s.split(' ')

    if(word.length !== sentence.length) return false

    let obj = {}

    for(let i = 0; i < sentence.length; i++){

        let initialWord = word[i]
        let initialSentence = sentence[i]

        if(!obj[initialWord] && !Object.values(obj).includes(initialSentence)){
            obj[initialWord] = initialSentence
        }else{
            if(obj[initialWord] !== initialSentence) return false
        }

    }

    return true;
};

let pattern = "abba", s = "dog cat cat dog"
let x = wordPattern(pattern,s );
console.log(x);