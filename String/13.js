var romanToInt = function(s) {
    let newArr=[];
    for(let i=0;i<s.length;i++){
        if(s.charAt(i) =='M'){
           newArr.push(1000)
        }
        if(s.charAt(i) =='D'){
           newArr.push(500)
        }
        if(s.charAt(i) =='C'){
           newArr.push(100)
        }
        if(s.charAt(i) =='L'){
           newArr.push(50)
        }
        if(s.charAt(i) =='X'){
           newArr.push(10)
        }
        if(s.charAt(i) =='V'){
           newArr.push(5)
        }
        if(s.charAt(i) =='I'){
           newArr.push(1)
        }
    }
    console.log(newArr)
    let ans =  0
   for(var i=0; i<newArr.length; i++){
        if(newArr[i]>=newArr[i+1]  ){
                ans+=newArr[i];
        }
        else{

             if(newArr[i+1]==undefined) {
                  ans+=newArr[i]
                 break;
             }
             else{
               
                ans+=newArr[i+1]-newArr[i]
                i=i+1;
                
             }
                  
       } 
}
return ans
};

let x = romanToInt("MCMXCIV") 
console.log(x)