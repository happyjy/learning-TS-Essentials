// Symbol: https://javascript.info/symbol
console.log(Symbol('foo') === Symbol('foo')); // false

const sym = Symbol();
const obj = {
  [sym]: "value"
};

// 접근을 막거나 필요할때 이렇게 사용한다.
console.log(obj[sym]);//"value"