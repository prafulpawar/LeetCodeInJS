let prompt = require('prompt-sync')();
let size = Number(prompt('Size Is: '));

let prices = [];
for (let i = 0; i < size; i++) {
    prices.push(Number(prompt(`Enter element ${i + 1}: `)));
}

var maxProfit = function(prices) {
    let min = Infinity; // Initialize min with a very large value
    let inmin = -1;     // Initialize index as -1 (invalid index)
    
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] > 0 && prices[i] < min) { // Ignore 0 values
            min = prices[i]; // Update min if it's positive and smaller
            inmin = i;       // Update index
        }
    }
         let ans =0
         let copy = 0
    
         for(let i =inmin ; i<prices.length;i++){
                if(ans >copy){
                      copy =ans
                }
                ans = prices[i]-min
         }
         if(ans >copy){
            copy =ans
      }
         return copy
}

let x = maxProfit(prices)
console.log(x)