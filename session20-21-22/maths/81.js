/**
 * @param {number} x
 * @return {number}
 */

function helper(i, x) {
    if (i * i > x) return i - 1;
    return helper(i + 1, x);
}

var mySqrt = function(x) {
    if (x === 0 || x === 1) return x;
    return helper(1, x);
};
