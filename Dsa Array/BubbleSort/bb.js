// Creating the bblSort function
/*
function bblSort(arr) {

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    console.log(arr);
}

var arr = [234, 43, 55, 63, 5, 6, 235, 547];
bblSort(arr);
*/
/*
function bblSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j=0; j< (arr.length-i-1); j++){
            if(arr[j]>arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }


        }
    }
    console.log(arr);
}
let arr1 = [5,8,7,1,9,3];
bblSort(arr1);
*/

/*
function bbObject(arr){
    for(let i = 0; i< arr.length; i++){
        for(let j = 0; j < (arr.length-i-1); j++){
            if(arr[j].age>arr[j+1].age){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp; 
            }
        }
    }
return arr;
}
let arr1 = [{'name':'aifa',
            age : 24} ,{'name':'dilfa',
                age : 44} ,
            {'name':'adam',age :5

}];
console.log (bbObject(arr1))
*/
function bubbleSort(arr){
    for (let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}
let arr1 =[5,7,4,5,2,1];
console.log(bubbleSort(arr1));