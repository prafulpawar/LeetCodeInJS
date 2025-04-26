let nums1=[3, 4, 6, 7, 9, 9];
let nums2= [1, 5, 7, 8, 8];

let num1 = new Set(nums1);
let num2 = new Set(nums2);

let k =0;
let ans = [];
for(let i=0;i<nums1.length;i++){
     if(num1[i]<num2[k] ){
         ans.push(num1[i])
     }
     else{
        ans.push(num2[k])
        k++;
     }
}

console.log(ans)