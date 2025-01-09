words = ["pay", "attire", "practice", "attend"]
pref = "at"
let count = 0;
let p =0;
for(let i=0;i<words.length;i++){
   let x = words[i];
    for(let j=0;j<pref.length;j++){
        if(x[j] == pref[j] ){
           count++;
        }
    }
    if(count == pref.length){
       p++
    }
   
}

console.log(p);
