var strongPasswordCheckerII = function (password) {
    let l = password.length;
    let upperCount = 0;
    let lowerCount = 0;
    let zeroCount  = 0;
    let specialCharCount = 0;

    if (l < 8) {
        return false;
    }
    let flag = true;
    for (let i = 0; i < password.length; i++) {

        let ascii = password.charCodeAt(i);

        if (password[i] === password[i + 1]) {
            return false;
             
        }

        if (ascii >= 48 && ascii <= 57) { 
             zeroCount++;
        }
        else if (ascii >= 65 && ascii <= 90) {
             upperCount++;
        }
        else if (ascii >= 97 && ascii <= 122) { 
             lowerCount++;
        }
        else if ( 
            ascii ===33 || ascii ===64|| ascii ===35 || ascii ===36||  
            ascii ===42 || ascii ===38|| ascii ==94 || ascii ===37 ||
            ascii ===40 || ascii ===41|| ascii ===45 || ascii == 43
             ){
            specialCharCount++;
        }
    }
      if(upperCount>0 && lowerCount>0 && zeroCount >0 && specialCharCount >0   ){
        return true
      }
      else{
        return false;
      }
      console.log(upperCount,lowerCount,specialCharCount,zeroCount)
};

let x = strongPasswordCheckerII("ecuwcfoyajkolntovfniplayrxhzpmhrkhzonopcwxgupzhoupw!")
console.log(x);