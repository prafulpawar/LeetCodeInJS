let input = 'AcgDfD';
let output = '';

for (let i = 0; i < input.length; i++) {
    let ascii = input.charCodeAt(i);

    if (ascii >= 65 && ascii <= 90) {
       
        output += input[i].toLowerCase();
    } else if (ascii >= 97 && ascii <= 122) {
       
        output += input[i].toUpperCase();
    } else {
        
        output += input[i];
    }
}

console.log(output);
