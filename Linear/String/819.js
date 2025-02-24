/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    paragraph = paragraph.toLowerCase().replace(/[^a-z\s]/g, '');
     let map = new Map();
    const result = paragraph.split(' ')

    for(let i = 0; i < result.length; i++) {
        map.set(result[i], (map.get(result[i]) || 0) + 1)
    }
    // console.log(map);
    

    let max ='';
    let k=0;
    for(let [key,value] of map){
        if(!map.has(banned[k])){
            
            continue;
        }
        else{
            console.log(key,' ', value,' ',banned[k])
        }
        // k++;
    }
};

let paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]

let x = mostCommonWord(paragraph, banned);
console.log(x);