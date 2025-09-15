Array.prototype.myFilter = function (cb) {
    const res = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            res.push(this[i]);
        }
    }
    return res;
};
arr = [1, 2, 3, 4, 5];
console.log(arr.myFilter((x) => x > 2));
