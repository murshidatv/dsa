/*class Queue{
    constructor()
    {

    }
}
    */
function insertionSort(a){
    let i=1
    while(i<a.length){
        let NTI= a[i], j=i-1
        while(j>=0 && a[j]>a[i]){
            a[j]=a[j+1]
            a[j+1]=NTI
            j--
        }
        i++
    }
}
 /*
class HashTable{
    get(key){
                
    }
}
 
[10,20,30] [35,25,15]
 
function mergeSort(a){
 
    if(a.length<2) return a
    
    let mid= Math.floor(a.length/2)
    let leftArr= a.slice(0,m)
    let rightArr= a.slice(m)
 
    return merge( mergeSort(leftArr), mergeSort(rightArr)    )
}
 
 
function merge(leftArr, rightArr){
 
    let sortedArr=[]
    while( leftArr.length && rightArr.length   ){
        if(leftArr[0]<rightArr[0]){
            sortedArr.push( leftArr.shift()     )
        }else{
            sortedArr.push( rightArr.shift()     )
        }
    }
    return [ ...sortedArr, ...leftArr, ...rightArr  ]
}
 
class Node(val){
        
    this.val=val
    this.next= null
 
}
 
 
 
class Stack{
 
    constructor(){
        this.size=0
        this.head=null
        this.tail= null
    }
 
    push(val){
        let node= new Node(val)
        if(this.getSize()>0){
            this.tail= node
        }
        this.head= node
        this.size++
    }
 
 
    pop(){
 
    }
 
 
    getSize(){
        return this.size
    }
}
 */