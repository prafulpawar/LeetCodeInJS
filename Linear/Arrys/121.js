let prompt = require('prompt-sync')();
let size = Number(prompt('Size Is: '));

let prices = [];
for (let i = 0; i < size; i++) {
    prices.push(Number(prompt(`Enter element ${i + 1}: `)));
}

var maxProfit = function(prices) {
    let maxProfit = 0;
    let minPrice = Infinity; 

    for (let i = 0; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]); // Har step par minimum price update karna hai
        let profit = prices[i] - minPrice; // Current price par bechne par jo profit hoga
        maxProfit = Math.max(maxProfit, profit); // Maximum profit update karna hai
    }
}

let x = maxProfit(prices)
console.log(x)