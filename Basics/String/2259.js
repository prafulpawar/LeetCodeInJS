var removeDigit = function(number, digit) {
    const result = [];
    const n = number.length;

    for (let i = 0; i < (1 << n); i++) {
        let combination = '';
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                combination += number[j];
            }
        }
        result.push(combination);
    }
    return result;
};


let number = '1231', digit = "1"
let x = removeDigit(number,digit)
console.log(x)