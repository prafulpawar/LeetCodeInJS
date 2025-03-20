class Stack {
    constructor() {
        this.items = [];
    }

   
    push(element) {
        this.items.push(element);
    }

   
    pop() {
        if (this.isEmpty()) {
            return "Stack Underflow";
        }
        return this.items.pop();
    }

  
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    
    isEmpty() {
        return this.items.length === 0;
    }

    
    size() {
        return this.items.length;
    }

    
    print() {
        console.log(this.items.toString());
    }

   
    clear() {
        this.items = [];
    }
}

// Example Usage
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
console.log("Top Element:", stack.peek()); // 30
console.log("Stack Size:", stack.size()); // 3

console.log("Popped Element:", stack.pop()); // 30
console.log("Stack Empty?", stack.isEmpty()); // false

stack.print(); // 10,20
stack.clear();
console.log("Stack Empty?", stack.isEmpty()); // true
