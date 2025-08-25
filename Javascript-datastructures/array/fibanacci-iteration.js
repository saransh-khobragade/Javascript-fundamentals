//Index    1, 2, 3, 4, 5, 6
//      0, 1, 1, 2, 3, 5, 8, 13
const fibonacci = (n)=>{
    let a = 0
    let b = 1
    let c
    for(let i=2;i<=n;i++){
        c = a + b
        a = b
        b = c
    }
    return c
}
fibonacci(6)

//TC o(n) = n