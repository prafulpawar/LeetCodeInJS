/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
     s = new Set(s)
     goal = new Set(goal) 
     console.log(s,' ',goal)
    let arr = Array.from(s);
    let goalarr = Array.from(goal)
    let temp ='';
    for(let i=0;i<arr.length;i++){
         temp=arr[i];
         arr[i]=arr[i+1]
         arr[i+1]=temp
    }
    arr = arr.join("")
    goal = goalarr.join("")
    console.log(arr,' ',goal)
    if(arr === goal){
        return true
    }
    else{
        return false
    }
};


let s = "aaaaaaabc", goal = "aaaaaaacb"
let x = buddyStrings(s,goal)
console.log(x);