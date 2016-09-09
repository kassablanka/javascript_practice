var a;
console.log(typeof a);               // "undefined"

a = "hello world";
console.log(typeof a);               // "string"

a = 42;
console.log(typeof a);               // "number"

a = true;
console.log(typeof a);               // "boolean"

a = null;
console.log(typeof a);               // "object" -- weird, bug

a = undefined;
console.log(typeof a);               // "undefined"

a = { b: "c" };
console.log(typeof a);               // "object"

var obj = {
    a: "hello world",
    b: 42,
    c: true
};

console.log(obj.a);      // "hello world"
console.log(obj.b);      // 42
console.log(obj.c);      // true

console.log(obj["a"]);   // "hello world"
console.log(obj["b"]);   // 42
console.log(obj["c"]);   // true
