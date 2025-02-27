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
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
    }
    insertAtLast(val){
        
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

let obj = new LinkedList();

obj.insertAtFirst(10);
obj.insertAtFirst(20);
obj.insertAtFirst(30);
obj.insertAtFirst(40);
obj.insertAtFirst(50);

obj.print();
