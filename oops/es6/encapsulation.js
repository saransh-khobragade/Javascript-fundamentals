//Encapsulation is practice of hiding the internal details of an object and exposing only the necessary information to the outside world as object.
class BankAccount {
	#balance = 0        //private variable
    constructor(balance) {
		this.#balance = balance;
	}

	showAccountDetails() {
		console.log(`Balance: ${this.#balance}`);
	}

	deposit(amount) {
		this.#balance += amount;
	}

	withdraw(amount) {
		if (this.#balance >= amount) {
			this.#balance -= amount;
			this.showAccountDetails();
		} else {
			console.log("Insufficient Balance");
		}
	}
}

let myBankAccount = new BankAccount(1000);

//console.log(myBankAccount.#balance) Property '#balance' is not accessible outside class 'BankAccount' because it has a private identifier.

myBankAccount.showAccountDetails()
myBankAccount.deposit(500);
