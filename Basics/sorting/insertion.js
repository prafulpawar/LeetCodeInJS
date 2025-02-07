
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

       
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}


function printArray(arr) {
    console.log(arr.join(" "));
}

let arr = [12, 11, 13, 5, 6];

insertionSort(arr);
printArray(arr);