// This Is An Node Class
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    // Adding To Top

    addFrist(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    addLast(data) {
        const newNode = new Node(data);
        if (!head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next != null) {
            current = current.next;
        }
        current.next = newNode;
    }

    size() {
        let count = 0;
        let current = this.head;
        while (current.next != null) {
            count++;
        }

        return count;
    }

    addAt(index, data) {

        if (index < 0 || index > this.size()) {
            console.error("InValid Index");
            return;
        }

        const newNode = new Node(data);

        if (index === 0) {
            const newNode = new Node(data);
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = this.head;
        }
        newNode.next = current.next;
        current.next = newNode
    }
    removeTop(){

        if(!this.head){
            return;
        }

        this.head = this.head.next;
    }
    removeLast(){
         if(!this.head){
            return;
         }
         let current = this.head;
         while(current.next.next){
            current = current.next;
         }
         current.next = null;
    }

    removeAt(index){
        if (index < 0 || index > this.size()) {
            console.error("InValid Index");
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = this.head;
        }
        if(current.next){
            current.next = current.next.next;
        }
    }
   print(){
      let current = this.head;
       while(current){
           console.log(current.data);
           current = current.next
       }
   }

}

// Instance
const linkedList = new LinkedList();
linkedList.addFrist(5)
linkedList.addFrist(3)
linkedList.addFrist(2)
linkedList.print()