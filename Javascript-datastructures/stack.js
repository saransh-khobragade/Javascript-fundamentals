class Stack{
    constructor(){
        this.items = []
    }
    push(data){
        this.items.push(data)
    }
    pop(){
        return this.items.pop()
    }
    size(){
        return this.items.length
    }
}

const s = new Stack()
s.push(1)
s.push(2)
s.push(3)
s.push(4)
s.push(5)
console.log(s.pop())    //5
console.log(s.size())   //4