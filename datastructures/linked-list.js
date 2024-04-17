class Node {
    constructor(data) {
        this.data = data
        this.next = null                
    }
}
class LinkedList {
    constructor(head = null) {
        this.head = head
    }
    print(){
        let ptr = this.head
        while (ptr.next) {
            console.log(ptr.data)
            ptr = ptr.next
        }
        console.log(ptr.data)
    }
    add(data){
        let ptr = this.head;
        if(ptr==null){
            this.head = new Node(data)
        }else{
            while (ptr.next) {
                ptr = ptr.next
            }
            ptr.next = new Node(data)
        }
    }
    remove(data){
        let ptr = this.head;
        if(ptr.data==data){
            this.head = this.head.next;
        }
        while (ptr.next) {
            if(ptr.next.data == data){
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
list.remove(5)
list.print()
console.log("linked list size:",list.size())
