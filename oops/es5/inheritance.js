function foo() { }
foo.prototype = {
    foo_prop: "foo val"
};

function bar() { }

var proto = new foo;
proto.bar_prop = "bar val";

//inheriting / attaching to chain
bar.prototype = proto;

var inst = new bar;

console.log(inst.foo_prop);
console.log(inst.bar_prop);