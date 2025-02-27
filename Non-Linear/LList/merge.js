class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertAtFirst(val) {
        let newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
    }

    insertAtLast(val) {
        let newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let cur = this.head;
        while (cur.next !== null) {
            cur = cur.next;
        }
        cur.next = newNode;
    }

    insertAtPos(val, pos) {
        if (pos < 0) {
            console.log("Invalid position!");
            return;
        }

        let newNode = new Node(val);

        // Insert at the beginning
        if (pos === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let cur = this.head;
        let prev = null;
        let index = 0;

        while (cur !== null && index < pos) {
            prev = cur;
            cur = cur.next;
            index++;
        }

        // If position is greater than list length
        if (index !== pos) {
            console.log("Position out of range!");
            return;
        }

        prev.next = newNode;
        newNode.next = cur;
    }

    deleteAtFirst() {
        if (this.head === null) {
            console.log("List is already empty!");
            return;
        }
        this.head = this.head.next;
    }

    deleteAtLast() {
        if (this.head === null) {
            console.log("List is already empty!");
            return;
        }
        if (this.head.next === null) {
            this.head = null;
            return;
        }

        let cur = this.head;
        while (cur.next.next !== null) {
            cur = cur.next;
        }
        cur.next = null;
    }

    deleteAtPos(pos) {
        if (this.head === null) {
            console.log("List is empty!");
            return;
        }

        if (pos < 0) {
            console.log("Invalid position!");
            return;
        }

        // Delete first node
        if (pos === 0) {
            this.head = this.head.next;
            return;
        }

        let cur = this.head;
        let prev = null;
        let index = 0;

        while (cur !== null && index < pos) {
            prev = cur;
            cur = cur.next;
            index++;
        }

        // If position is greater than list length
        if (cur === null) {
            console.log("Position out of range!");
            return;
        }

        prev.next = cur.next;
    }

    print() {
        if (this.head === null) {
            console.log("No Node Found!!!!!");
            return;
        }
        let temp = this.head;
        let ans = [];
        while (temp !== null) {
            ans.push(temp.val);
            temp = temp.next;
        }
        console.log(ans.join(" -> "));
    }
}

// Testing
let obj = new LinkedList();

obj.insertAtFirst(10);
obj.insertAtFirst(20);
obj.insertAtFirst(30);
obj.insertAtFirst(40);
obj.insertAtFirst(50);

obj.insertAtLast(60);
obj.insertAtLast(70);
obj.insertAtLast(80);
obj.insertAtLast(90);
obj.insertAtLast(100);

obj.print(); // 50 -> 40 -> 30 -> 20 -> 10 -> 60 -> 70 -> 80 -> 90 -> 100

// Insert at position 3
obj.insertAtPos(25, 3);
obj.print(); // 50 -> 40 -> 30 -> 25 -> 20 -> 10 -> 60 -> 70 -> 80 -> 90 -> 100

// Insert at beginning
obj.insertAtPos(5, 0);
obj.print(); // 5 -> 50 -> 40 -> 30 -> 25 -> 20 -> 10 -> 60 -> 70 -> 80 -> 90 -> 100

// Insert at an invalid position
obj.insertAtPos(200, 20); // Position out of range!

// Delete at position 4
obj.deleteAtPos(4);
obj.print(); // 5 -> 50 -> 40 -> 30 -> 20 -> 10 -> 60 -> 70 -> 80 -> 90 -> 100

// Delete at beginning
obj.deleteAtPos(0);
obj.print(); // 50 -> 40 -> 30 -> 20 -> 10 -> 60 -> 70 -> 80 -> 90 -> 100

// Delete at last position
obj.deleteAtPos(9);
obj.print(); // 50 -> 40 -> 30 -> 20 -> 10 -> 60 -> 70 -> 80 -> 90

// Delete at an invalid position
obj.deleteAtPos(15); // Position out of range!
