
/*
const arr =[2,3,4,5,6,7];
const sum = arr.reduce((total,num)=>total + num,0);
console.log(sum);
*/
/*
function sumArray(arr,n){
    if(n<=0){
        return 0;
    }else{
        return arr[n-1]+sumArray(arr,n-1);
    }
}
let arr = [1,2,3,4,5];
console.log(sumArray(arr,arr.length));
*/

function sumArray(arr,n){
    if(n<=0){
        return 1;
    }else{
        return arr[n-1]*sumArray(arr,n-1);
    }
}
let arr = [10,10];
console.log(sumArray(arr,arr.length));