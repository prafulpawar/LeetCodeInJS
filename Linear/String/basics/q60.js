let word = 'Hello bhai Kaise ho a';
let op = '';

for (let i = 0; i < word.length; i++) {
    if (i === 0 || word[i - 1] === ' ') {
        op += word[i].toUpperCase();
    } else {
        op += word[i];
    }
}

console.log(op);
