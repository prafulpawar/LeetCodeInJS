let arr = [7, 83, 2, 1, 3, 5, 2, 9, 6];

divide(arr, 0, arr.length - 1);

console.log(arr);

function divide(arr, first, last) {
    if (first < last) {
        let mid = Math.floor(first + (last - first) / 2);
        divide(arr, first, mid);
        divide(arr, mid + 1, last);
        conquer(arr, first, mid, last);
    }
}

function conquer(arr, first, mid, last) {
    let temp = new Array(last - first + 1);
    let idx1 = first, idx2 = mid + 1, k = 0;

    while (idx1 <= mid && idx2 <= last) {
        if (arr[idx1] < arr[idx2]) {
            temp[k++] = arr[idx1++];
        } else {
            temp[k++] = arr[idx2++];
        }
    }

    while (idx1 <= mid) {
        temp[k++] = arr[idx1++];
    }

    while (idx2 <= last) {
        temp[k++] = arr[idx2++];
    }

    for (let i = 0, j = first; i < temp.length; i++, j++) {
        arr[j] = temp[i];
    }
}
