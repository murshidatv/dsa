function insertionSort(array) {
    let len = array.length;
    for (let i = 1; i < len; i++) {
        let key = array[i];
        let j = i - 1;

        // Move elements of array[0..i-1], that are greater than key,
        // to one position ahead of their current position
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = key;
    }
    return array;
}

// Example usage:
let arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Unsorted array:", arr);
let sortedArray = insertionSort(arr);
console.log("Sorted array:", sortedArray);
