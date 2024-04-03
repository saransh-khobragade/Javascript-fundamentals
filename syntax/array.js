arr = [1,2,3,4]

//PUSH
arr.push(6)
console.log(arr)    //[ 1, 2, 3, 4, 6 ]

element = arr.pop()
console.log(element) //6

//LENGTH
console.log(arr.length)         //4

//SEARCH element
console.log(arr.indexOf(3))     //2
console.log(arr.indexOf(10))    //-1

//SLICE return new array start(including) to end(excluding) 
arr = [1,2,3,4]
console.log(arr.slice(2,3))     //[ 3 ] return new array
console.log(arr.slice(2))       //[ 3, 4 ]
console.log(arr.slice(-1))      //[ 4 ]
console.log(arr)                //[ 1, 2, 3, 4 ]  no change to original array

//SPLICE change original array  start(including),how many elements
arr = [1,2,3,4]
console.log(arr.splice(2,1))    //[ 3 ] return sliced array
console.log(arr)                //[ 1, 2 ,4] updated arary

arr = [1,2,3,4]
console.log(arr.splice(0,1,5,6))  //[ 1 ] return sliced array  from third aurgument everything is replacement
console.log(arr)                //[ 5, 6, 2, 3, 4 ]

