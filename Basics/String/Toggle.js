let str = 'AcgDFD';
let result = '';

for (let i = 0; i < str.length; i++) {
    let s = str.charCodeAt(i);
    if (s >= 97 && s <= 122) { // Lowercase letters
        result += String.fromCharCode(s - 32); // Convert to uppercase
    } else if (s >= 65 && s <= 90) { // Uppercase letters
        result += String.fromCharCode(s + 32); // Convert to lowercase
    } else {
        result += str[i]; // Non-alphabet characters remain unchanged
    }
}

console.log(result);
