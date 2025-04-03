const prompt = require('prompt-sync')();
class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.rigth = null;
    }
}

class Tree{
    constructor(){
        this.root = null;
    }
    createTree(){
        let data = prompt("Enter Value");
        if(data ===-1){
            return null;
        }
        this.root = new Node(data);
        console.log('Enter Left Child For ',data);
        this.root.left = this.createTree();
        console.log('Enter Right Child For',data);
        this.root.rigth = this.createTree();
    }
}

let obj = new Tree();
obj.createTree()