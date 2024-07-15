class Node {
    constructor (data,next = null){
        this.data = data;
        this.next =null;
    }
}
class SinglyLinkedList{
    constructor(){
        this.head = null;
    }

prepend(data){
 
  const newNode = new Node(data);
  newNode.next = this.head;
  this.head = newNode;

}
printList(){
    let current = this.head;
    while(current){
        console.log(current.data);
        current = current.next;
    }
}
append(data){
    let newNode= new Node(data);
    if(!this.head ){
     this.head = newNode;  
    }
    else{
        let current = this.head;
        while(current.next){
        current = current.next;
       }
       current.next = newNode;
    }
}
}
let list = new SinglyLinkedList();
list.append(1);
list.append(2);
list.append(3);

list.prepend(4);
list.prepend(5);
list.prepend(6);
list.printList();