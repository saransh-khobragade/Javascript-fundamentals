//ES6
class Bank {

    static counter = 1;     //Static property will be same for all instances of classes
    #balance = 42;          //Prvate property can only be access within class
    
    constructor() {
        this.amount = amount;
    }
    getBalance(){
        return this.#balance
    }
}

obj = new Bank(50)

console.log(Bank.counter)   //Static property can only be accessed via class name
console.log(obj.amount)     //50
console.log(obj.getBalance())//Private propety can only be accessed by class function
