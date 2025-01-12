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
    
     console.log(uniqueArr)
     console.log(arr2)
     
     for(let i=0;i<arr2.length;i++){
         for(let j=0;j<uniqueArr.length;j++){
             if(arr2[i]===uniqueArr[j]){
                console.log(arr2[i] ,' ', String.fromCharCode(i+97),' ', uniqueArr[i]  )
             }
         }
     }
};


let key   = "the quick brown fox jumps over the lazy dog"
let message = "vkbs bs t suepuv"
let x = decodeMessage(key,message);