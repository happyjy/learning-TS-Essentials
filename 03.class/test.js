"use strict";
/*
  # 10. Abstract Classes
    * Abstract 클래스로 만들고 사용하려면 사용하고 싶은
      클래스, 프로퍼티, 함수에 abstract 키워드를 붙여
      객체로 만들 class에 extends 키워드를 통해서 상속한다.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AbstractKlass11 = /** @class */ (function () {
    function AbstractKlass11() {
        this._name = "mark";
    }
    AbstractKlass11.prototype.getAge = function () {
        return 0;
    };
    return AbstractKlass11;
}());
var Klass11 = /** @class */ (function (_super) {
    __extends(Klass11, _super);
    function Klass11(age) {
        var _this = _super.call(this) || this;
        _this.age = age;
        return _this;
    }
    Klass11.prototype.setName = function (name) {
        this._name = name;
    };
    Klass11.prototype.getName = function () {
        return this._name;
    };
    return Klass11;
}(AbstractKlass11));
var klass11Inst = new Klass11(32);
klass11Inst.setName("jyoon");
var getNameResult = klass11Inst.getName();
var klass11InsAge = klass11Inst.age;
console.log(klass11Inst);
console.log(getNameResult);
console.log(klass11InsAge);
