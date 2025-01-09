let s = 'hello world 12345 @# ABCD';

let l_c = 0; // lowercase count
let u_c = 0; // uppercase count
let v = 0;   // vowel count
let c = 0;   // consonant count
let sp = 0;  // space count
let n = 0;   // number count
let spc=0; // special character count

for (let i = 0; i < s.length; i++) {
    if (
        s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u' ||
        s[i] === 'A' || s[i] === 'E' || s[i] === 'I' || s[i] === 'O' || s[i] === 'U'
    ) {
        v++; // Count vowels
    } else if (s[i] === ' ') {
        sp++; // Count spaces
    } else if (s[i] >= '0' && s[i] <= '9') {
        n++; // Count numbers
    } else if ((s[i] >= 'a' && s[i] <= 'z') || (s[i] >= 'A' && s[i] <= 'Z')) {
        c++; // Count consonants
        if (s[i] >= 'a' && s[i] <= 'z') {
            l_c++; // Count lowercase
        } else if (s[i] >= 'A' && s[i] <= 'Z') {
            u_c++; // Count uppercase
        }
    }
    else{
        spc++;  // Count special characters
    }
}

console.log(`Lowercase: ${l_c}, Uppercase: ${u_c}, Vowels: ${v}, Consonants: ${c}, Spaces: ${sp}, Numbers: ${n} ,Special: ${spc}`);
