/**
 * @param {number} money
 * @param {number} children
 * @return {number}
 */
var distMoney = function(money, children) {
    if (money < children) return -1;
    
    money -= children;
    let count = Math.floor(money / 7);
    if (count > children) {
        return children - 1;
    }
    if (count === children - 1 && money % 7 === 3) {
        return count - 1;
    }

    return count;

};

let money = 16
let children = 2

console.log(distMoney(money, children)) 