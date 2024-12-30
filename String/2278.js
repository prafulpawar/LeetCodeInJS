let prompt = require('prompt-sync')();
let s = prompt("Enter String ");
let letter = prompt ("Enter letter ");

var percentageLetter = function(s, letter) {
    let count = 0;
    let lcount = 0;

    for(let i=0; i<s.length;i++){
          count++;
        if(s.charAt(i) == letter){
            lcount++;
        }
    }
    return Math.floor(lcount/count*100)

};


let ans = percentageLetter(s,letter);
console.log(ans)