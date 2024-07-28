function fibonacci(n) {
    if (n <= 1) {
        return n; // Base cases: fib(0) = 0, fib(1) = 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
}

// Example usage
console.log(fibonacci(7)); // Output: 13
console.log(fibonacci(10)); // Output: 55
