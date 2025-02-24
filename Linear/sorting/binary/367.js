/**
 * @param {number} num
 * @return {boolean}
 */



var isPerfectSquare = function(num) {
    let start = 0, end =num
    
    while (start <= end) {
 
      
        let mid = Math.floor((start + end) / 2);
        
        //  console.log(mid)
        if ((mid *mid) === num) {
            // console.log(mid)
           return [true,mid, num]
        }

     
        else if (mid < num && mid*mid<num)
            start = mid + 1;
        else
            end = mid - 1;
      
    }

    return false;
};
let p = 81
for(let i=1;i<=900;i++){
    const x = isPerfectSquare(i)
    if(x !== false){
        console.log(x)
    }
}