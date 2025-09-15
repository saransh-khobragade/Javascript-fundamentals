// Encapsulation is the bundling of data and the methods that act on that data such that access to that data is restricted from outside the bundle

class Counter {
    
    #count = 0          //private variable

    click() {
        this.#count += 1;
    }
    getCount() {
        return this.#count.toLocaleString()
    }
}
const myCounter = new Counter();
myCounter.click();
myCounter.click();
myCounter.click();

console.log(
    myCounter.getCount()
);