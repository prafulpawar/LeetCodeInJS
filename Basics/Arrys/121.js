let prompt = require('prompt-sync')();
let size = Number(prompt('Size Is: '));

let prices = [];
for (let i = 0; i < size; i++) {
    prices.push(Number(prompt(`Enter element ${i + 1}: `)));
}

var maxProfit = function(prices) {
   
}

let x = maxProfit(prices)
console.log(x)