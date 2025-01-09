let s = "ABCDAABCDAGFF";
s = s.toLowerCase(); 
const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));

const frequency = new Array(26).fill(0); 

for (let i = 0; i < s.length; i++) {
    if (s[i] >= 'a' && s[i] <= 'z') { 
        const index = s[i].charCodeAt(0) - 97; 
        frequency[index]++;
    }
}

for(let i = 0; i < frequency.length; i++) {
    if(frequency[i] > 0) {
        console.log(`${alphabet[i]} appears ${frequency[i]} times`);
    }
}