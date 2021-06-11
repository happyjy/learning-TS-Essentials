"use strict";
var Person5 = /** @class */ (function () {
    function Person5(name, age) {
        this.name = name;
        this.age = age;
    }
    Person5.prototype.hello = function () {
        console.log("\uC548\uB155\uD558\uC138\uC694! " + this.name + " \uC785\uB2C8\uB2E4. \uB098\uC774\uB294 " + this.age + " \uC785\uB2C8\uB2E4.");
    };
    return Person5;
}());
var personInst = new Person5("Yoon");
var personInst1 = new Person5("Yoon", 32);
personInst.hello();
personInst1.hello();
