function range(s,e){
    if(e<s){
        return [];
    }
    else {
         const numbers = range(s,e-1);
         numbers.push(e)
         return numbers;
    }
   
}

console.log(range(0,5))