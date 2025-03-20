class Node {
     constructor(val) {
        this.val = this.val;
        this.next = null;
     }
}

class LinkedList{
    constructor(){
        this.head = null
    }

    insertAtFirst(val){
         if(this.head === null){
            console.log("Head Is Null")
         }
    }
}

let obj = new LinkedList();
obj.insertAtFirst(10)
console.log(obj)