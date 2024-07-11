// Step 1: Define the Node class
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
// Step 2: Initialize the head variable
let head = null;
// Step 3: Implement the push function
function push(new_data) {
    // 1 & 2: Allocate the Node & Put in the data
    let new_node = new Node(new_data);

    // 3. Make next of new Node as head
    new_node.next = head;

    // 4. Move the head to point to new Node
    head = new_node;
}
// Step 4: Test the push function
function printList() {
    let current = head;
    while (current !== null) {
        console.log(current.data);
        current = current.next;
    }
}
// Add nodes to the list
push(10);
push(20);
push(30);

// Print the linked list
printList();

