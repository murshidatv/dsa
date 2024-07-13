class Node{
    constructor(data){
    this.data=data;
    this.next=null;
    }
}

 let head = null;
 function push(new_data){

    const new_node = new Node(new_data);
    new_node .next = head;
    head = new_node;

 }

function printList(){
let current = head;
    while(current !== null){
 
        console.log(current.data);
        current =current.next;

    }
 }

 // Add nodes to the list
push(10);
push(20);
push(30);

// Print the linked list
printList();




