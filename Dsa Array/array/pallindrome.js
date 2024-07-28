function isPalindromeArray(arr) {

    return arr.join('') === arr.slice().reverse().join('');
}

const arr1 = [1, 2, 3, 2, 1];
const arr2 = [1, 2, 3, 4, 5];

console.log(isPalindromeArray(arr1));
console.log(isPalindromeArray(arr2));