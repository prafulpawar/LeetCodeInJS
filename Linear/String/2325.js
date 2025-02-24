/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */




var decodeMessage = function(key, message) {
    let arr =[];
      let count=0;
      for(let i=0;i<key.length;i++){
          if(key[i]!==' '){
           arr.push(key[i])
            count++;
          }
      }
    let arr2=[];
    for(let i=0;i<message.length;i++){
        if(message[i]!==' '){
         arr2.push(message[i])
          count++;
        }
    }
      
      const uniqueArr = [...new Set(arr)];
      let result = {};

      for (let i = 0; i < uniqueArr.length; i++) {
          let key = String.fromCharCode(i + 97); 
          result[key] = uniqueArr[i]; 
          console.log(uniqueArr[i], ' ', key); 
      }
      
      console.log(result);
     
};


let key   = "the quick brown fox jumps over the lazy dog"
let message = "vkbs bs t suepuv"
let x = decodeMessage(key,message);