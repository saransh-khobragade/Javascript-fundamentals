const arr=[1,2,3,4,5]

for(let i=0;i<arr.length;i++){
    console.log(arr[i]) // 1 2 3 4 5
}

//Index
for(x in arr){
    console.log(x) //   0 1 2 3 4
}

//Values
for(x of arr){
    console.log(x) //   1 2 3 4 5
}

//Async
arr.forEach(x=>{
    console.log(x)  //   1 2 3 4 5
})