var uniqueMorseRepresentations = function(words) {

    let arr = [
        ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....",
        "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.",
        "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-",
        "-.--", "--.."
      ];
      
    let set = new Set();
    for(let i=0;i<words.length;i++){
        let str = "";
        for(let j=0;j<words[i].length;j++){
            str += arr[words[i].charCodeAt(j) - 97]
        }
        set.add(str);
    }
  return set.size
};

let words = ["gin","zen","gig","msg"] 
let x = uniqueMorseRepresentations (words);
console.log(x);