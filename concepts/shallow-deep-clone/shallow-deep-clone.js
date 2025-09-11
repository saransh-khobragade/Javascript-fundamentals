console.log("--------Direct copy,Referenced copy")
const a = {"name":"saransh","result":{"marks":33}}

const b = a
b.name = "rahul"
b.result.marks = 50

console.log(a)
console.log(b)

console.log("--------Shallow copy,only first level get copy deep level get referenced")
const a1 = {"name":"saransh","result":{"marks":33}}
const b1 = Object.assign({},a1)
b1.name = "rahul"
b1.result.marks = 50

console.log(a1)
console.log(b1)

console.log("--------Deep copy,fresh copy no references")
const a2 = {"name":"saransh","result":{"marks":33}}
const b2 = JSON.parse(JSON.stringify(a2))
b2.name = "rahul"
b2.result.marks = 50

console.log(a2)
console.log(b2)

//Note it will ont work if properties are functions, sysbols, date