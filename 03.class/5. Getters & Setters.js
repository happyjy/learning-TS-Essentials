"use strict";
/*
  # 5. Getters & Setters
    * get, set할때 함수를 호출 함으로 다른 동작을 해줄 수 있다.
    * 예를 들어 setter할때 몇번했는지 count할 수 있다.
*/
var Person5Klass = /** @class */ (function () {
    function Person5Klass(_name, age) {
        this._name = _name;
        this.age = age;
    }
    Object.defineProperty(Person5Klass.prototype, "name", {
        get: function () {
            console.log("# get");
            return this._name + " hungry";
        },
        set: function (n) {
            console.log("# set");
            this._name = n;
        },
        enumerable: false,
        configurable: true
    });
    return Person5Klass;
}());
var classP5_1 = new Person5Klass("Jyoon", 32);
console.log(classP5_1._name); // get을 하는 함수 getter
console.log(classP5_1.name); // get을 하는 함수 getter
classP5_1.name = "YJY"; // set을 하는 함수 setter
console.log(classP5_1.name); // get을 하는 함수 getter
