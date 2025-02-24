let prompt = require('prompt-sync')();
let size = Number(prompt('Size Is: '));

let prices = [];
for (let i = 0; i < size; i++) {
    prices.push(Number(prompt(`Enter element ${i + 1}: `)));
}

for(let i = 0; i < prices.length; i++) {
    let count =1;
    for(let j = i+1; j < prices.length; j++) {
          if(prices[i] === prices[j]){
              count++
              prices[j] =-1
          }
          if(prices[j] === -1){
              continue
          }
    }
    if(prices[i] !== -1){
        console.log(`${prices[i]} occurs ${count} times`)
    }
}