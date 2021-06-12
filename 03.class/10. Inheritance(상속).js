"use strict";
/*
  # 10. Inheritance(상속)
  * 접근제한자 사용하는 이유는
    - 각 목적에 맞게 사용하면서 오염 되지 않게 사용하는 것이다.
  * protected
    - 상속받은 클래스에서 접근 O, 외부에는 접근 X
  * override vs Overloading
    - overriding: Same Mehotd Name, Same parameter(상속관계, child class)
    - overloading: Same method Name, Differenct Parameter(같은 클래스)
    [ref](https://cupofprogramming.blogspot.com/2016/10/overloading-vs-overriding-in-java.html)

  * 상속 받았으면 super를 항상 작성해야한다.
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
var Parent10Klass = /** @class */ (function () {
    function Parent10Klass(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    Parent10Klass.prototype.print = function () {
        console.log("# name: " + this._name + ", age: " + this._age);
    };
    Parent10Klass.prototype.printName = function () {
        console.log(this._name, this._age);
    };
    return Parent10Klass;
}());
var Child10Klass = /** @class */ (function (_super) {
    __extends(Child10Klass, _super);
    function Child10Klass(age) {
        var _this = _super.call(this, "Jyoon", age) || this;
        _this.gender = "male";
        _this.printName();
        return _this;
    }
    return Child10Klass;
}(Parent10Klass));
var p10 = new Parent10Klass("yyy", 0);
// p10._name // protected 접근제한자 
// p10.printName() // protected 접근제한자 
var c10 = new Child10Klass(33);
c10.print();
