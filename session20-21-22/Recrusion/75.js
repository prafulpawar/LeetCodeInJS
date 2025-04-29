function fact (n,data){
     if (n===0){
        return 1;
     }
    let a = fact(n-1,data);
    console.log(a)
    return (a+1);
}

let n = 5;
let data = 1;
let ans = fact(n,data);
// console.log(ans)