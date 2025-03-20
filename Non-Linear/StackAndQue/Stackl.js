class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;  
        this.size = 0;    
    }

    // Push operation - Add an element to the stack
    push(value) {
        const newNode = new Node(value);
        newNode.next = this.top;  // New node points to old top
        this.top = newNode;       // Update top to new node
        this.size++;
    }

    // Pop operation - Remove and return the top element
    pop() {
        if (this.isEmpty()) {
            return "Stack Underflow";
        }
        let poppedValue = this.top.value;
        this.top = this.top.next; // Move top to next node
        this.size--;
        return poppedValue;
    }

    // Peek operation - Get the top element without removing it
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.top.value;
    }

    // isEmpty operation - Check if the stack is empty
    isEmpty() {
        return this.size === 0;
    }

    // Size operation - Get the size of the stack
    getSize() {
        return this.size;
    }

    // Print operation - Display the stack elements
    print() {
        let current = this.top;
        let stackValues = [];
        while (current) {
            stackValues.push(current.value);
            current = current.next;
        }
        console.log(stackValues.join(" -> "));
    }

    // Clear operation - Remove all elements from the stack
    clear() {
        this.top = null;
        this.size = 0;
    }
}

// Example Usage
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
console.log("Top Element:", stack.peek()); // 30
console.log("Stack Size:", stack.getSize()); // 3

console.log("Popped Element:", stack.pop()); // 30
console.log("Stack Empty?", stack.isEmpty()); // false

stack.print(); // 20 -> 10
stack.clear();
console.log("Stack Empty?", stack.isEmpty()); // true
