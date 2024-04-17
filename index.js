const a = {
    "val": 1,
    "next": {
        "val": 2,
        "next": {
            "val": 3,
            "next": {
                "val": 4,
                "next": {
                    "val": 5,
                    "next": null
                }
            }
        }
    }
}

const reverseList = function(head){
    console.log(head.val)
    while(head.next!==null){
        reverseList(head.next)
    }
}
reverseList(a)