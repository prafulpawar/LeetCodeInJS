/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    

    let start = 0, end = letters.length - 1;
    let pos = -1
    while (start <= end) {

      
        let mid = Math.floor((start + end) / 2);
        console.log(mid)

     
         if (letters[mid] > target){
            pos = letters[mid]
            end = mid - 1;
         }
           
        else
            start = mid + 1;
    }

    if(pos ==-1){
        return letters[0]
    }
    return pos
};


let letters = ["c","f","j"], target = "a"

const x = nextGreatestLetter(letters,target);
console.log(x)