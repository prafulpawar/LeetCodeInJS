function rev (a,revs){
    if(a<1){
        return revs;
    }
     revs = (revs*10)+a%10;
   return  rev(Math.floor(a/10), revs)
}

let a = 1234;
let revs = 0;
let ans = rev(a,revs);
console.log(ans)