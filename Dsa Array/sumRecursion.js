

function sumArray(arr, n) {
    if (n <= 0) {
        return 0; // Base case: sum of an empty array is 0
    }
    return sumArray(arr, n - 1) + arr[n - 1]; // Recursive case
}

// Example usage
const arr = [1, 2, 3, 4, 5];
console.log(sumArray(arr, arr.length)); // Output: 15
