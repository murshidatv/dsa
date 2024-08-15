/*const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;

    const middle = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, middle));
    const right = mergeSort(arr.slice(middle));

    return merge(left, right);
};

const merge = (left, right) => {
    const result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) result.push(left[i++]);
        else result.push(right[j++]);
    }

    return [...result, ...left.slice(i), ...right.slice(j)];
};

// Example usage:
let arr = [38, 27, 43, 3, 9, 82, 10];
console.log("Original Array:", arr);
console.log("Sorted Array:", mergeSort(arr));
*/

function mergeSort(arr){
    if(arr.length <= 1 ){
        return arr;

    }
    const mid = Math.floor(arr.length/2);
    const left = arr.slice(0,mid);
    const right =arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
   // return merge(mergeSort(left),mergeSort(right));
}
function merge(left,right){
    const result = [];
    let i=0;
    let j=0;
    while(i<left.length && j<right.length){
        if(left[i] < right[j]){
           result.push(left[i]);
           i++;
        }else{
            result.push(right[j]);
            j++;
        }
       
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
 

}
let arr = [8,5,9,2,3,6];
console.log('original array :',arr );
console.log('Sorted array :',mergeSort(arr));
