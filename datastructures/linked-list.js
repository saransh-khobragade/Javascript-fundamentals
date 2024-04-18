class Node {
    constructor(data) {
        this.val = data
        this.next = null                
    }
}
class LinkedList {
    constructor(head = null) {
        this.head = head
    }
    print(){
        let ptr = this.head
        while (ptr) {
            console.log(ptr.val)
            ptr = ptr.next
        }
    }
    add(data){
        if(this.head==null){
            this.head = new Node(data)
        }else{
            let ptr = this.head;    //shallow copy
            while (ptr.next) {
                ptr = ptr.next
            }
            ptr.next = new Node(data)
        }
    }
    remove(data){
        let ptr = this.head;
        if(ptr.val==data){
            this.head = this.head.next;
        }
        while (ptr.next) {
            if(ptr.next.val == data){
                ptr.next = ptr.next.next
            }else{
                ptr = ptr.next
            }
        }
    }
    size(){
        let count = 0; 
        let ptr = this.head;
        while (ptr) {
            count++;
            ptr = ptr.next
        }
        return count;
    }
    
}

const list = new LinkedList()
list.add(1)
list.add(2)
list.add(3)
list.add(4)
list.add(5)
list.print()
console.log("linked list size:",list.size())

list.remove(5)
list.print()
console.log("linked list size:",list.size())

module.exports = {
    LinkedList,
};
