Function.prototype.myBind = function (context, ...args) {
    const fn = this;
    return function (...nextArgs) {
        return fn.apply(context, [...args, ...nextArgs]);
    };
};
