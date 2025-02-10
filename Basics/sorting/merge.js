let arr = [7,83,2,1,3,5,2,9,6];

divide(arr,0,arr.length-1);

function divide (arr,first,last){
    if(first<last){

        let mid = first + (last-first)/2;
        divide(arr,first,mid)
        divide(arr,mid+1,last)
        conquer(arr,first,)
    }
}
function conquer (arr,first,mid,last){
      let temp = new Array(last-first-1);
      let idx1 = first
      let idx2 = mid+1
      let k=0
      while(idx1<=mid && idx2<=last){
        if(arr[idx1] < arr[idx2]){
            temp[k] = arr[idx1]
            idx1++;
        }
        else{
            temp[k] = arr[idx2]
            idx1++;
        }
        k++
      }
}