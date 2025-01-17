/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    if(s.length===1){
        return true;
    }
    s = s.toLowerCase();
    
     
    const arr = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122 || char.charCodeAt(0)>=48 && char.charCodeAt(0)<=57   ) {
            arr.push(char);
        }
    }
  
   
    let size = arr.length-1
    for(let i=0; i<arr.length;i++){
        if(arr[i] !== arr[size]){
            return false;
        }
        size--;
    }
     return true;
    
};

let s ="a."
let x = isPalindrome(s);
console.log(x);