function fact(n,i){
    if(i>n){
        return ;
    }
    if(n%i===0){
        console.log(i)
    }
    return fact(n,i+1)
}
let n = 10
fact(n,1)