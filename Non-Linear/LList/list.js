class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    insertAtFirst(val){
         let newNode = new Node(val); // ek node ban gayi
         newNode.next = this.head;
         this.head = newNode;
    }

    insertAtLast(val){
        let newNode = new Node(val) // ek new node banai hamane

    }



    print(){
        let temp = this.head;
        while(temp !== null){
             console.log(temp.val)
            temp = temp.next;
        }
    }


}

const obj = new LinkedList();
obj.insertAtFirst(10)
obj.insertAtFirst(20)
obj.insertAtFirst(30)
obj.print()
console.log('-----------');


