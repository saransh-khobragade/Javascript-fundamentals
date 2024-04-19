//https://leetcode.com/problems/invert-binary-tree/description/

const root = {"val":4,"left":{"val":2,"left":{"val":1,"left":null,"right":null},"right":{"val":3,"left":null,"right":null}},"right":{"val":7,"left":{"val":6,"left":null,"right":null},"right":{"val":9,"left":null,"right":null}}}
var invertTree = function(root) {
    if(root==null){
        return root
    }else{
        const left = invertTree(root.left)
        const right = invertTree(root.right)
        
        root.left = right
        root.right = left
        return root
    }
};
function printPreorder(node){
    if(node==null){
        return
    }else{
        console.log(node.val)
        printPreorder(node.left)
        printPreorder(node.right)
    }
}
const node = invertTree(root)
printPreorder(node)
