"use strict";
/*
  # 8. static Properties & Methods
    * class의 object에서 공통적으로 사용될 프로퍼티, 함수에 대해서 static 키워드를 사용한다.
*/
var Person8Klass = /** @class */ (function () {
    function Person8Klass() {
    }
    Person8Klass.prototype.getCity = function () {
        console.log(Person8Klass.CITY + "\uC5D0 \uC624\uC2E0\uAC78 \uD658\uC601 \uD569\uB2C8\uB2E4.");
    };
    Person8Klass.prototype.setCity = function (city) {
        Person8Klass.CITY = city;
    };
    Person8Klass.CITY = "BUSAN";
    return Person8Klass;
}());
var classP8_1 = new Person8Klass();
classP8_1.getCity();
var classP8_2 = new Person8Klass();
classP8_2.getCity();
classP8_1.setCity("Seoul");
classP8_1.getCity();
classP8_2.getCity();
