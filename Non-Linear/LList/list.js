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

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let newNode = new Node(val) // ek new node banai hamane
        let temp = this.head
       while(temp.next !=null){
           temp = temp.next;
       }
       temp.next = newNode
        
    }

    insertAtSpeciic(val , pos) {
       if(this.head === null){
        return
       }




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
// obj.print()
// console.log('-----------');

obj.insertAtLast(40)
obj.insertAtLast(50)
obj.insertAtLast(60)

/// Insert At Specifc

obj.insertAtSpeciic(70,)

obj.print()

