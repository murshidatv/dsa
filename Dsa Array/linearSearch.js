function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

// Example usage
console.log(linearSearch([2, 4, 6, 8, 10], 8)); 
console.log(linearSearch([2, 4, 6, 8, 10], 5)); 
