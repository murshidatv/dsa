

class Node{
    constructor(data,next =null){
        this.data = data;
        this.next = next;
    }
}
class SinglyLinkedList{
    constructor(data){
        this.head = null;
    }
    prepend(data){
        let newNode = new Node(data);
        newNode.next=this.head;
        this.head = newNode;

    }
    printList(){
        let current =this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }

}
let list = new SinglyLinkedList();
list.prepend(50);
list.prepend(10);
list.printList();







