class Queue{
    constructor(){
        this.items = []
    }
    queue(data){
        this.items.push(data)
    }
    deque(){
        return this.items.shift()
    }
    size(){
        return this.items.length
    }
}

const s = new Queue()
s.queue(1)  //push element at rear
s.queue(2)
s.queue(3)
s.queue(4)
s.queue(5)
console.log(s.deque())  //1 pop element from front
console.log(s.size())   //4 length