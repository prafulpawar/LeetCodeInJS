/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
     let arr=[];
     s = Array.from(s)
     console.log(s)
     console.log(s)
    for(let i=0;i<indices.length;i++){
        for(let j=0;j<s.length;j++){
             if(indices[i]===j){
                arr.push(s[j])
             }
        }
    }
    return arr.join("")
};
s = "codeleet", indices = [4,5,6,7,0,2,1,3]
let x  = restoreString(s,indices)
console.log(x)