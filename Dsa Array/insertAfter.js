// Node class
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// InsertAfter function
function insertAfter(prev_node, new_data) { 
    // 1. Check if the given Node is null
    if (prev_node == null) { 
        console.log("The given previous node cannot be null"); 
        return; 
    } 

    // 2. Allocate the Node &
    // 3. Put in the data
    var new_node = new Node(new_data); 

    // 4. Make next of new Node as next of prev_node
    new_node.next = prev_node.next; 

    // 5. Make next of prev_node as new_node
    prev_node.next = new_node; 
}

// Example Usage
// Creating the linked list: 1 -> 2 -> 4
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(4);

// Insert 3 after node with data 2
insertAfter(head.next, 3);

// Function to print the linked list
function printList(node) {
    while (node != null) {
        process.stdout.write(node.data + " ");
        node = node.next;
    }
    console.log();
}

// Print the updated list: 1 -> 2 -> 3 -> 4
printList(head);
