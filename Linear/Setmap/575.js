/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let set = new Set(candyType)
    if(set.size===1){
        return 1
    }
    else{
        let min=0;
        let mincan=0
        min=candyType.length/2;
        mincan=set.size;
        if(min>mincan){
            return mincan
        }
        else{
            return min
        }
    }
};

let candyType =[1,1,1,1,2,2,2,3,3,3]

let x = distributeCandies(candyType);
console.log(x);