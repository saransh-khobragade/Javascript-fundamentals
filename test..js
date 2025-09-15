function sum(args){
    let total = args.reduce((x,y)=>x+y,0)
    if(args.length == 0){
        return total
    }else{
        return (...next) => ()
    }
    function
}

console.log(sum(1)(3,4)(5))