/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    let arr = s.split(" ")
    let temp =0;
    for(let i =0;i<arr.length;i++){
        let word = arr[i]
        if(word.charCodeAt(0)>=48 && word.charCodeAt(0)<=57 ){
             if(temp<Number(word)){
                 temp =Number(word)
             }
             else{
                 return false;
             }
        }
    }
    return true;
};

s="1 box has 3 blue 4 red 6 green and 12 yellow marbles"

let x = areNumbersAscending(s)

console.log(x)