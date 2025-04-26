let w1 = 'state';
let w2 = 'taste';

if(w1.length!=w2.length){
    console.log(false);
    return;
}

let set = new Set(w2);


for(let i=0;i<w1.length;i++){
     let x = w1[i];
     if(!set.has(x)){
         console.log(false)
         return;
     }

}
console.log(true)