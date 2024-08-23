function reverseStringUsingStack(str) {
    let stack = []; // Create an empty stack
    
    // Push all characters of the string into the stack
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }

    let reversedStr = ''; // To store the reversed string
    
    // Pop all characters from the stack and append them to the reversedStr
    while (stack.length > 0) {
        reversedStr += stack.pop();
    }

    return reversedStr;
}

// Example usage:
let inputString = "Hello, World!";
let reversedString = reverseStringUsingStack(inputString);
console.log("Reversed string:", reversedString);
