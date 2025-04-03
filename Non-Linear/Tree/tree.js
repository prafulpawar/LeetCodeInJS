const prompt = require('prompt-sync')();

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;  
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    createTree() {
        let data = prompt("Enter Value: ");
        if (parseInt(data) === -1) {  
            return null;
        }

        let node = new Node(parseInt(data));
        console.log('Enter Left Child For', node.val);
        node.left = this.createTree();
        console.log('Enter Right Child For', node.val);
        node.right = this.createTree(); 
        return node;
    }

    preorder(root) {
        if (root === null) {
            return;
        }

        process.stdout.write(root.val + " ");  
        this.preorder(root.left);
        this.preorder(root.right);
    }

    postorder(root) {
        if (root === null) {
            return;
        }

        this.postorder(root.left);
        this.postorder(root.right);
        process.stdout.write(root.val + " ");  
    }

    inorder(root) {
        if (root === null) {
            return;
        }

        this.inorder(root.left);
        process.stdout.write(root.val + " ");  
        this.inorder(root.right);
       
    }
}

let obj = new Tree();
obj.root = obj.createTree();

console.log("Preorder Traversal:");
obj.preorder(obj.root);

console.log("Postorder Traversal:");
obj.postorder(obj.root)