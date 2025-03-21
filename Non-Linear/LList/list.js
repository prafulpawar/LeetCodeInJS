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

    insertAtSpecific(val, pos) {
        if (pos < 0) {
            console.log("Invalid position! Position must be >= 0.");
            return false;
        }
    
        const newNode = new Node(val);
    
        // Insert at beginning
        if (pos === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return true;
        }
    
        let temp = this.head;
        let i = 0;
    
        // Traverse to the node before `pos`
        while (temp !== null && i < pos - 1) {
            temp = temp.next;
            i++;
        }
    
        // If `temp` is null, pos is out of range
        if (temp === null) {
            console.log("Position out of range!");
            return false;
        }
    
        // Insert new node at position
        newNode.next = temp.next;
        temp.next = newNode;
        
        return true;
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
obj.insertAtFirst(30)
obj.insertAtFirst(20)
obj.insertAtFirst(10)
// obj.print()
// console.log('-----------');

obj.insertAtLast(40)
obj.insertAtLast(50)
obj.insertAtLast(60)

/// Insert At Specifc

obj.insertAtSpeciic(70,4)

obj.print()

