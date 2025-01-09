let s = "ABCDEAFGA"
s[3] = "X";
console.log(s)

//console.log(s.replace("A","x"))
console.log(s.replaceAll("A","x"))

const newStr = s.concat("How Are You")
console.log(newStr)
const str = "Hello, how are you?";
const result = str.split(" ");
console.log(result); // ["Hello,", "how", "are", "you?"]
