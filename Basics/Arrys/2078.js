
/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
    let max1=0;
    let max2=0
    for(let i=0;i<colors.length;i++){
       if(colors[0] != colors[i] ){
          max1=Math.abs(0-i)
       }
    }

    for(let i=0;i<colors.length;i++){
        if(colors[0] != colors[i] ){
           max2=Math.abs(0-i)
        }
     }
   return Math.max(max1,max2)

};

let  colors=[1,1,1,6,1,1,1]
let ans = maxDistance(colors);

console.log(ans)