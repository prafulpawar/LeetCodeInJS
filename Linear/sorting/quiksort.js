let arr  = [7,4,3,1,5,4,9];

quickSort(arr, 0, arr.length - 1);

console.log(JSON.stringify(arr));

function quickSort(arr, first, last) {
    if (first < last) {
        let pivotIdx  = partition(arr, first, last);
        quickSort(arr, first, pivotIdx - 1);
        quickSort(arr, pivotIdx + 1, last);
    }
}

function partition(arr, first, last) {
    let pivot = arr[last], i = first - 1;
    for (let j = first; j < last; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    i++;
    swap(arr, i, last);
    return i;
}


function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
