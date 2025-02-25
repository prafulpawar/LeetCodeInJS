class Node{
     constructor(){
         this.val = val;
         this.next = null;
     }
}

class LinkedList{
    constructor(){
        this.head = null
    }
    insertAtFirst(val){
        let newNode = new Node(val);
        if(this.head = null){
            this.head =newNode
            return 
        }
        newNode.next = this.head
        this.head = newNode

    }
}