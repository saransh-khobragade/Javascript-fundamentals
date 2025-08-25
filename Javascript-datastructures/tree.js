class Node {
    constructor(data) {
        this.val = data
        this.left = null
        this.right = null
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(data){
        this.root = this.insertRec(this.root,data)
    }
    insertRec(node, data) {
        if (node == null) {
            return new Node(data)
        } else {
            if (data < node.val) {
                node.left = this.insertRec(node.left, data)
            } else {
                node.right = this.insertRec(node.right, data)
            }
            return node
        }
    }
    printInorder(node){
        if(node==null){
            return
        }else{
            this.printInorder(node.left)
            console.log(node.val)
            this.printInorder(node.right)
        }
    }
    printPreorder(node){
        if(node==null){
            return
        }else{
            console.log(node.val)
            this.printPreorder(node.left)
            this.printPreorder(node.right)
        }
    }
    printPostorder(node){
        if(node==null){
            return
        }else{
            this.printPostorder(node.left)
            this.printPostorder(node.right)
            console.log(node.val)
        }
    }
}

const bst = new BinarySearchTree()
bst.insert(4)
bst.insert(2)
bst.insert(7)
bst.insert(1)
bst.insert(3)
bst.insert(6)
bst.insert(9)
console.log("Inorder LEFT ROOT RIGHT")
bst.printInorder(bst.root)
console.log("Preorder ROOT LEFT RIGHT")
bst.printPreorder(bst.root)
console.log("Postorder LEFT RIGHT ROOT")
bst.printPostorder(bst.root)
