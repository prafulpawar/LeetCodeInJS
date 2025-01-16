/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let map = new Map();
    for (let i=0 ; i<names.length ; i++ ) {
        map.set(heights[i],names[i]);
    }
    heights.sort((a,b)=> b-a);
     let ans = new Array(heights.length).fill(0)
     for (let i=0 ; i<names.length ; i++ ) {
       ans[i] = map.get(heights[i])
    }
    return ans;
};

let names = ["Alice","Bob","Bob"], heights = [155,185,150]

let x = sortPeople(names,heights);

console.log(x);