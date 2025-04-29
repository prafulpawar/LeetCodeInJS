function fib (n) {
    if(n<=1){
        return n;
    }
    return fib(n-1)+fib(n-2);
}

let  data   = 10;

let ans = fib(data);
console.log(ans)