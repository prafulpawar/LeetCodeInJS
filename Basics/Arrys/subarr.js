let prompt = require('prompt-sync')();
let size = Number(prompt('Size Is: '));
let k = Number(prompt('K IS: '));


let prices = [];
for (let i = 0; i < size; i++) {
    prices.push(Number(prompt(`Enter element ${i + 1}: `)));
}


for (let i = 0; i < prices.length; i++) {
     let currSum =0;
    for (let j = i; j < prices.length; j++) {
          currSum += prices[j];
    }
    if(currSum === k){
        console.log(`currSum: ${currSum} ,`)
        break;
    }
}