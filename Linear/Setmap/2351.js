/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let map = new Map();
    for(let i = 0; i < s.length; i++){
        map.set(s[i], (map.get(s[i]) || 0) + 1)
        if(map.get(s[i]) === 2){
            return s[i]
        }
    }
};

let s = repeatedCharacter("abccbaacz")
console.log(s);