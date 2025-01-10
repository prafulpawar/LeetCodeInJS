/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let count=0;
    let newArr=[]
      for(let i=0;i<num.length;){
         if(num[i] == num[i+1] && num[i+2] ==num[i]  ){
           
            count=3;
            
         }
         if(count === 3 ){
            
            newArr.push(num[i]);
            count=0;
            i=i+2
         }
         else{
            i++
         }
         
      }
      if(newArr.length <1){
         return "";
      }
      else{
          let max = newArr[0];
          for(let i=0;i<newArr.length;i++){
             if(Number(newArr[i]) > Number(max)){
                max = newArr[i];
             }
          }
          
          return  Array(3).fill(max).join("");
      }

};

let num = "014455"
let x  = largestGoodInteger(num);
console.log(x)