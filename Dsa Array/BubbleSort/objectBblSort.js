function bubbleSort(arr){
    const len = arr.length;
    for(let i=0;i<len;i++){
        for(let j=0;j<len-i-1;j++){
            if(arr[j].age>arr[j+1].age){
                temp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}

let people = [
    { name: 'Alice', age: 20 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'Hadin', age: 10 },
    { name: 'Adam', age: 1 }
];


console.log(bubbleSort(people));