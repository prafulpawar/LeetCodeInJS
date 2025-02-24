/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function(s, k) {
    while (s.length > k) {
        let arr = [];
        
        // Iterate through the string in chunks of size `k`
        for (let i = 0; i < s.length; i += k) {
            let sum = 0;

            // Sum up the digits in the current chunk
            for (let j = i; j < Math.min(i + k, s.length); j++) {
                sum += Number(s[j]);
            }

            arr.push(sum); // Add the sum of the current chunk to the array
        }

        // Update `s` with the new summed array as a string
        s = arr.join('');
    }

    return s;
    
       
};

let s ="11111222223", k = 3

console.log(digitSum(s, k)) 