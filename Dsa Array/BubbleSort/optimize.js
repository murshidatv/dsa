function bubbleSort(array) {
    const arrayLength = array.length;
    let isSwapped;

    for (let i = 0; i < arrayLength; i++) {
        isSwapped = false;

        for (let j = 0; j < arrayLength - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                // Swap elements
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                isSwapped = true;
            }
        }

        // If no two elements were swapped in the inner loop, array is sorted
        if (!isSwapped) 
            break;
    }

    return array;
}

// Test the function
const sortedArray = bubbleSort([45, 23, 3, 5346, 5, 356, 243, 35]);
console.log("Sorted Array:");
console.log(sortedArray);
