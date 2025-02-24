/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let set = new Set(sentence)
    let count =0;
    for(let i = 0; i < set.size; i++) {
        count++;
    }
    if(count==26){
        return true;
    }
    else{
        return false;
    }
    
};

let sentence = "thequickbrownfoxjumpsoverthelazydog"
let x = checkIfPangram(sentence)
console.log(x);