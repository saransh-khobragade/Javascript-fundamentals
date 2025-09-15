Array.prototype.myMap = function(cb) {
    const res = [];
    for (let i = 0; i < this.length; i++) res.push(cb(this[i], i, this));
    return res;
};
arr = [1,2,3]
console.log(arr.myMap((x)=>x*2))