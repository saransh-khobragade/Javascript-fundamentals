for(var i=0;i<3;i++){
    setTimeout(()=>{
        console.log('var->',i)
    },0)
}
//var-> 3 INSTANT
//var-> 3 INSTANT
//var-> 3 INSTANT
//All block have async functions but have hold to closure var variable, which get changed at last block.

for(var i=0;i<3;i++){
    setTimeout(()=>{
        console.log('var->',i)
    },1000*i)
}
//var-> 3 INSTANT
//var-> 3 AFTER 1 SEC
//var-> 3 AFTER 2 SEC
//All block have async functions but have hold to closure var variable, which get changed at last block but will excute after invervals.

//SOLUTION
for(let i=0;i<3;i++){
    setTimeout(()=>{
        console.log('let->',i)
    },i*1000)
}
/*
let-> 0 INSTANT
let-> 1 AFTER 1 sec
let-> 2 AFTER 2 sec
here every block will have its own values of i independent so i will be printed as expected at interval
*/