

function factorial(n) {
    if (n === 0) {
        return 1; // Base case: 0! = 1
    }
    return n * factorial(n - 1); // Recursive case
}

// Example usage
console.log(factorial(5)); 
console.log(factorial(0)); 
