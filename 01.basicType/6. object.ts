const p1 = {name: "Yoon", age: 39}

/* 
  [#point] Object.create의 type: "create(o: object | null): any;" 
 */
const p2 = Object.create({name: "Yoon", age: 39})
const p3 = Object.create(null)
// const p4 = Object.create(42)
// const p5 = Object.create("string")
// const p6 = Object.create(false)
// const p7 = Object.create(undefined)

// 안됨 create는 o: object | null 이런 타입을 가지고 있다. 
// const p3 = Object.create(39)

let objTest: object = {};
objTest = {name: 'Mark'};
objTest = [{name: 'Mark'}];
// objTest = 39; // Error
// objTest = 'Mark'; // Error
// objTest = true; // Error
// objTest = 100n; // Error
// objTest = Symbol(); // Error
// objTest = null; // Error
// objTest = undefined; // Error

declare function create(o:object | null): void;
