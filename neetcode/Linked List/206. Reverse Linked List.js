//https://leetcode.com/problems/reverse-linked-list/description/
const input = { "val": 1, "next": { "val": 2, "next": { "val": 3, "next": { "val": 4, "next": { "val": 5, "next": null } } } } }

const print = (head) =>{
    let ptr = head
    while (ptr) {
        console.log(ptr.val)
        ptr = ptr.next
    }
}
var reverseList = function (head) {
    prev = null
    curr = head
    next = null

    while(curr){
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
};

const l = reverseList(input)
print(l)
