
//Time complexity 
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

// Singly Linked List class
class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    // Method to add node at the end
    append(data) {
        let newNode = new Node(data); // O(1)
        if (!this.head) { // O(1)
            this.head = newNode; // O(1)
        } else {
            let current = this.head; // O(1)
            while (current.next) { // O(n)
                current = current.next; // O(1)
            }
            current.next = newNode; // O(1)
        }
    }

    // Convert array to a linked list
    fromArray(array) {
        array.forEach(data => this.append(data)); // O(n^2) if `append()` is O(n)
    }
 // Method to add node at the beginning
 prepend(data) {
    let newNode = new Node(data); // O(1)
    newNode.next = this.head; // O(1)
    this.head = newNode; // O(1)
}

// Method to print the linked list
printList() {
    let current = this.head; // O(1)
    while (current) { // O(n)
        console.log(current.data); // O(1)
        current = current.next; // O(1)
    }
}
 // Method to delete multiple node with the specified value
 deleteNode(key) {
    while (this.head && this.head.data === key) { // O(n)
        this.head = this.head.next; // O(1)
    }
    let current = this.head; // O(1)
    while (current && current.next) { // O(n)
        if (current.next.data === key) { // O(1)
            current.next = current.next.next; // O(1)
        } else {
            current = current.next; // O(1)
        }
    }
}

// Method to delete a node with the specified value
deleteMultipleNodex(key) {
    while (this.head && this.head.data === key) { // O(n)
        this.head = this.head.next; // O(1)
    }
    let current = this.head; // O(1)
    while (current && current.next) { // O(n)
        if (current.next.data === key) { // O(1)
            current.next = current.next.next; // O(1)
            return key; // O(1)
        } else {
            current = current.next; // O(1)
        }
    }
}
    

// Method to remove duplicates in a sorted singly linked list
removeDuplicates() {
    let current = this.head; // O(1)
    while (current && current.next) { // O(n)
        if (current.data === current.next.data) { // O(1)
            current.next = current.next.next; // O(1)
        } else {
            current = current.next; // O(1)
        }
    }
}

// Method to remove all duplicates in an unsorted singly linked list
removeDuplicates() {
    let current = this.head; // O(1)
    let previous = null; // O(1)
    let values = new Set(); // O(1)
    while (current) { // O(n)
        if (values.has(current.data)) { // O(1)
            previous.next = current.next; // O(1)
        } else {
            values.add(current.data); // O(1)
            previous = current; // O(1)
        }
        current = current.next; // O(1)
    }
}


// Method to insert a node after a node with x data
insertAfter(x, data) {
    let current = this.head; // O(1)
    while (current) { // O(n)
        if (current.data === x) { // O(1)
            current.next = new Node(data, current.next); // O(1)
            return; // O(1)
        }
        current = current.next; // O(1)
    }
}

// Method to insert a node before a node with x data
insertBefore(x, data) {
    if (this.head && this.head.data === x) { // O(1)
        this.head = new Node(data, this.head); // O(1)
        return; // O(1)
    }
    let current = this.head; // O(1)
    while (current && current.next) { // O(n)
        if (current.next.data === x) { // O(1)
            current.next = new Node(data, current.next); // O(1)
            return; // O(1)
        }
        current = current.next; // O(1)
    }
}
// Print all elements in reverse order
printListReverse() {
    let arr = []; // O(1)
    let current = this.head; // O(1)
    while (current) { // O(n)
        arr.unshift(current.data); // O(n)
        current = current.next; // O(1)
    }
    console.log(arr.join(' -> ')); // O(n)
}
}
let list = new SinglyLinkedList();

list.append(1);
list.append(2);
list.append(3);


list.prepend(4);
list.prepend(5);
list.prepend(6);

// Print the linked list
console.log("The linked list is:");
list.printList();

// Delete a node with the specified value
list.deleteNode(7);

// Print the linked list after deletion
console.log("The linked list after deletion is:");
list.printList();

// Insert a node after a node with x data
list.insertAfter(6, 20); // Inserts 6 after 10
list.insertBefore(6, 25); // Inserts 6 before 30

// Print the linked list after insertion
console.log("The linked list after insertion is:");
list.printList();

//Remove duplicates in a sorted singly linked list
list.removeDuplicates();

// Print the linked list after removing duplicates
console.log("The linked list after removing duplicates is:");
list.printList();

// Converts array to linked list
list.fromArray([111, 222, 333, 444, 555]); 
console.log("The linked list created from an array")
list.printList();

// Prints: 5 4 3 2 1
console.log("reverse linked list")
list.printListReverse(); 