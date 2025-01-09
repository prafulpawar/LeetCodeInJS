let s = "naman";
let size = s.length-1
console.log(size);
for(let i=0;i<s.length;i++){
    if(s.charAt(i)!==s.charAt(size)){
        console.log("Not a palindrome");
        return;
    }
    size--;
}
console.log("Pelindrom")