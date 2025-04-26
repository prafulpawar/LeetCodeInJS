//  Ip ---> [10,20,30,40,50,60]
//  RotateBy--> [40,50,60,10,20,30]

// Block Swap
function left(arr, k) {
    let l = k;
    for (let i = 0; i < k / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[l];
        arr[l] = temp;
        l--;
    }
}

function right(arr,l, k) {
   
    for (let i = l; i < k / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[l];
        arr[l] = temp;
        l--;
    }
}

function main() {
    let arr = [10, 20, 30, 40, 50, 60];
    let k = 3;
    left(arr, k);
    right(arr,k, arr.length-1);
    console.log(arr)
}

