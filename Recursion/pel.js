function pel(n, rev = 0) {
    if (n === 0) return rev;
    rev = rev * 10 + (n % 10);
    return pel(Math.floor(n / 10), rev);
}

console.log(pel(121)); // Output: 4321
