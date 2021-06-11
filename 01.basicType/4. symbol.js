"use strict";
var _a;
// Symbol: https://javascript.info/symbol
console.log(Symbol('foo') === Symbol('foo')); // false
var sym = Symbol();
var obj = (_a = {},
    _a[sym] = "value",
    _a);
// 접근을 막거나 필요할때 이렇게 사용한다.
console.log(obj[sym]); //"value"
