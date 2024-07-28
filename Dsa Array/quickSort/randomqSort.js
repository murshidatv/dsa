const quickSort = (arr) => {
    if (arr.length < 2) return arr;

    let pivotIndex = Math.floor(Math.random() * arr.length);
    let pivot = arr[pivotIndex];
    let left = [];
    let right = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (i === pivotIndex) continue; // Skip the pivot element
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
};
  
console.log(quickSort([8, 4, 9, 2, 1, 6, 7, 5, 8]));
