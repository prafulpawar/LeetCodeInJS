function n (a) {
   if(a===0){
    return ;
   }
   console.log(a)
   n(a-1);
}

let a = 10;
n(a)
console.log('----')
function c (a){
     if(a===0){
        return ;
     }
     c(a-1);
     console.log(a)
}
c(a);