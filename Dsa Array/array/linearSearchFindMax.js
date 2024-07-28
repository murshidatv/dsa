function findMax(arr) {
    if (arr.length === 0) {
        return null; // Return null for an empty array
    }

    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Example usage
console.log(findMax([2, 4, 6, 8, 10])); // Output: 10
console.log(findMax([10, 20, 5, 7, 25, 3])); // Output: 25
