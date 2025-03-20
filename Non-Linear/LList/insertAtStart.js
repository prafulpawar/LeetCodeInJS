class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Insert at the beginning
    insertAtFirst(value) {
      const newNode = new Node(value);
      newNode.next = this.head;  // Point new node to current head
      this.head = newNode;       // Update head to new node
    }
  
    // Print the linked list
    print() {
      let current = this.head;
      while (current) {
        console.log(current.value);
        current = current.next;
      }
    }
  }
  
  // Usage
  const list = new LinkedList();
  list.insertAtFirst(30);
  list.insertAtFirst(20);
  list.insertAtFirst(10);
  
  list.print();  
  // Output: 
  // 10
  // 20
  // 30
  