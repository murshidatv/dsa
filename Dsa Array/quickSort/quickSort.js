function quickSortClassic(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSortClassic(left), pivot, ...quickSortClassic(right)];
}

// Example
let arr1 = [3, 6, 8, 10, 1, 2, 1];
console.log("Original Array:", arr1);
console.log("Sorted Array:", quickSortClassic(arr1));
