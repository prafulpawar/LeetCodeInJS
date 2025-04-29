function funcN (n) {
    if(n==0){
        return;
    }
    console.log(n)
    funcN(n-1);
}


// - - n
function func (n) {
    if(n==0){
        return ;
    }
    
     func(n-1);
    console.log(n)
   
    
}

let a = 5;
func(a);
let b = 10;
funcN(b)