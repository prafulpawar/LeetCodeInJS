/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    s=new Set(s)
    goal = new Set(goal)
  
     s= Array.from(s);
     goal = Array.from(goal)
     let j=0;
     let i=0;
    for(i;i<s.length;i++){
        if(s[i] === goal[j] ){
            j++;
        }
    }
    console.log(i,' ',j)

    // if(s === goal){
    //     return true
    // }
    // else{
    //     return false
    // }
};


let s = "aaaaaaa", goal ="aaaaaaa"
let x = buddyStrings(s,goal)
console.log(x);