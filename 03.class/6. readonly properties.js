"use strict";
/*
  # 6. readonly properties
    * [point] readonly라서 에러
*/
var Person6Klass = /** @class */ (function () {
    function Person6Klass(_name, age) {
        this._name = _name;
        this.age = age;
        this.name = "Jyoon";
        this.country = "australia";
    }
    Person6Klass.prototype.hello = function () {
        // this.country = "Korea"; // [point] readonly라서 에러 
    };
    return Person6Klass;
}());
var classP6_1 = new Person6Klass("Jyoon", 32);
// classP6_1.name = "YJY";  // [point] readonly라서 에러 
