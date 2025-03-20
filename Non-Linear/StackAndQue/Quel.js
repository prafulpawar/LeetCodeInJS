//Lifo
// Last In First Out 
// Only One Entry
class Node{
    constructor(val){
      this.val = val
      this.next = null
    }
  }
  class Queue{
     constructor(){
      this.front = null;
      this.rear = null;
      this.size =0;
     }
     enqueue(val){
      const newNode = new Node(val)
      if(this.rear == null){
        this.front = this.rear = newNode
      }else{
        this.rear.next = newNode
        this.rear = newNode
      }
      this.size++;
     }
  
     dequeue(){
       if(this.front == null){
        console.log("queue is empty");
        return
       }   
       this.front = this.front.next
       if(this.front == null) this.rear = null
       this.size--;
     }
     empty(){
      return this.size ===0
     }
     display(){
      if(this.front == null){
        console.log("queue is empty");
        return
       }   
       let cur = this.front
       while(cur!= null){
         process.stdout.write(cur.val+" ");
          cur = cur.next
       }
     }
  }
  
  let obj = new Queue();
  obj.enqueue(10)
  obj.enqueue(20)
  obj.enqueue(30)
  obj.enqueue(40)
  obj.enqueue(50)
  obj.display()
  console.log();
  
  obj.dequeue()
  obj.display()
  console.log();
  console.log(obj.size);