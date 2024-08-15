function mergeSort (arr){
    if(arr.length <= 1){
        return arr;
    }else{
        let mid = Math.floor(arr.length /2);
        let left = arr.slice(0,mid);
        let right =arr.slice(mid);
        return merge(mergeSort(left),mergeSort(right));
    }
}
function merge(left,right){
    let result = [];
    let i = 0,j = 0;
    while(i < left.length && j < right.length){
        if(left[i]<right[j]){
            result.push(left[i]);
            i++;
        }else{
            result.push(right[j]);
            j++;
        }
    }
    return [...result, ...left.slice(i),...right.slice(j)]

}
let arr = [50,41,7,8,55];
console.log("arr1",arr);
console.log("sorted arr",mergeSort(arr));
