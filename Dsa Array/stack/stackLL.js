
// Stack using Linked List


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
 }
 
 
 class StackList {
    constructor() {
        this.size = 0;
        this.head = null;
    }
 
 
    isEmpty() {
        return this.size === 0;
    }
 
 
    push(value) {
        const node = new Node(value);
        if(this.isEmpty()) {
            this.head = node;
            node.next = null;
        }else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
 
    pop() {
        if(this.isEmpty()) return console.log("stack is empty");
        else {
            let current = this.head;
            this.head = current.next;
            this.size--;
            return current.value;
        }
    }
 
    peek() {
        if(this.isEmpty()) return console.log("stack is empty");
        else {
            return this.head.value;
        }
    }

    print() {
        if(this.isEmpty()) return console.log("stack is empty");
        let stackValues = "";
        let current = this.head;
        while(current) {
            stackValues += `${current.value} `;
            console.log(current.value);
            current = current.next;
        }
        console.log(stackValues);
    }
 }
 
 const stack = new StackList();
 stack.push(8)
 stack.push(18)
 stack.push(28)
 stack.push(38);
 stack.print()
 console.log(`peek : ${stack.peek()}`)
 console.log(stack.pop())
 console.log(stack.pop())
 stack.print();
 console.log(`peek : ${stack.peek()}`)
 