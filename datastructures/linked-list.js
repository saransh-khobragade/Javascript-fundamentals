class Node {
    constructor(data) {
        this.data = data
        this.link = null                
    }
}
class LinkedList {
    constructor(head = null) {
        this.head = head
    }
    print(){
        let ptr = this.head
        while (ptr.link) {
            console.log(ptr.data)
            ptr = ptr.link
        }
        console.log(ptr.data)
    }
    add(data){
        let ptr = this.head;
        if(ptr==null){
            this.head = new Node(data)
        }else{
            while (ptr.link) {
                ptr = ptr.link
            }
            ptr.link = new Node(data)
        }
    }
    remove(data){
        let ptr = this.head;
        if(ptr.data==data){
            this.head = this.head.link;
        }
        while (ptr.link) {
            if(ptr.link.data == data){
                ptr.link = ptr.link.link
            }else{
                ptr = ptr.link
            }
        }
    }
    size(){
        let count = 0; 
        let ptr = this.head;
        while (ptr) {
            count++;
            ptr = ptr.link
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
