/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let map = new Map();
    let arr = s.split(" ");
    for(let i=0; i<pattern.length;i++){
        if(pattern.charAt(i)){
        if(arr[i]!=map.has(pattern.charAt(i))){
            return false;
        }
        }
        else{
             map.set(pattern.charAt(i),arr[i])
        }
    }
  return true;
};

let pattern = "aba",  s = "cat cat cat dog"
let x = wordPattern(pattern,s)
console.log(x)