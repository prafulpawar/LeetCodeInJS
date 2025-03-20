function node(data){
    this.data = data;
    this.next = null;
}

var head  = new node(5);
var mid   = new node(10);
var tail  = new node(13)

head.next = mid; // refernce to next node
mid.next  = tail


console.log(head)