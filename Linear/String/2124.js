let prompt = require('prompt-sync')();
let s = prompt("Enter String ");


var checkString = function(s) {
    let count =0;
    for(let i = 0 ; i<s.length;i++){
         if(s.charAt(i) == 'b'){
             if(s.charAt(i+1) =='a'){
                count++;
             }
         }
    }
  if(count ===0){
      return true;
  }
  else{
    return false;
  }
};

let x  = checkString(s)
console.log(x)