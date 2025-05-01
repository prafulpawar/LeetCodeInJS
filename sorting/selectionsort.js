let arr = [5,2,8,1,3]

function min (nums,k){
      let min = +Infinity;
      let index = 0;
      for(let i=k;i<nums.length;i++){
          if(nums[i]<min){
              min=nums[i]
              index = i;
          }
      }
      return index
}

function swap (value,min,arr){
         let data = arr[min];
         let temp = arr[value];
         arr[value] = data;
         arr[min]  = temp;
}


for(let i=0;i<arr.length;i++){
      let ans = min(arr,i);
      swap(i,ans,arr); 
}
console.log(arr)