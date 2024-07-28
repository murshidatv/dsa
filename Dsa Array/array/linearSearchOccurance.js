function linearSearchString(str, target) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === target) {
            return i;
        }
    }
    return -1;
}

// Example usage
console.log(linearSearchString("hello world", "o")); // Output: 4
console.log(linearSearchString("hello world", "x")); // Output: -1
