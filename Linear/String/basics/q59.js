let  words = ["pay","attention","practice","attend"];
pref = "att"
for(let i=0;i<words.length-1;i++){
    if(words[i].startsWith(pref)){
        console.log(i+1)
        return 
    }
}
console.log(-1)