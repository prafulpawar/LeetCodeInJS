let prompt = require('prompt-sync')();
let size = Number(prompt('Size Is: '));

let nums = [];
for (let i = 0; i < size; i++) {
    nums.push(Number(prompt(`Enter element ${i + 1}: `)));
}

var minMaxGame = function (nums) {
    if(nums.length ===2){
       return nums[1]
    }
    let newArr=[]
    let k = 0
    let j =0
   let i =0;
    while (i!=1) {    
          if(nums[k]<nums[j]){
            newArr[i] = nums[k];
            
          }
          else{
            newArr[i] = nums[j];
           
          }
          k+=2 
          j+=2
          i++;
         if(i==nums.length/2-1){
             nums = newArr
             k=0;
             j=0;
             i=0;
             console.log(nums)
         }
    }     
    return nums[0];
};

minMaxGame(nums);

