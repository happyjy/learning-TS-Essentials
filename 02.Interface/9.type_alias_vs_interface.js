"use strict";
var art;
var iart;
/*
  error
  - A class can only implement an object type or intersection of object types with statically known members.ts(2422)
*/
// class Pet1 implements PetType {}
var Pet2 = /** @class */ (function () {
    function Pet2() {
    }
    Pet2.prototype.fly = function () {
        throw new Error("Method not implemented.");
    };
    Pet2.prototype.layEggs = function () {
        throw new Error("Method not implemented.");
    };
    Pet2.prototype.swim = function () {
        throw new Error("Method not implemented.");
    };
    return Pet2;
}());
var mi = {
    a: "A",
    b: "B"
};
console.log({ 1: mi.a, 2: mi.b });
// type MergingType = {
//   b: string;
// }
// interface
