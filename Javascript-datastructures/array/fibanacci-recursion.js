//Index    1, 2, 3, 4, 5, 6
//      0, 1, 1, 2, 3, 5, 8, 13
const fibonacci = (n)=>{
   if(n<=1){
    return n
   }else{
    return fibonacci(n-1)+fibonacci(n-2)
   }
}
console.log(fibonacci(5))
//TC o(n) = n