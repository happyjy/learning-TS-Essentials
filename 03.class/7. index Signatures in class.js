"use strict";
/*
  # 7. index Signatures in class

  * 클래스 프로퍼티가 동적으로 바뀔때 사용
  * 초기값을 설정해 줄 필요가 없다.
  *
*/
var Person7Klass = /** @class */ (function () {
    function Person7Klass() {
        this.mark = "male";
    }
    return Person7Klass;
}());
var classP7_1 = new Person7Klass();
classP7_1.H = "male";
classP7_1.A = "female";
console.log(classP7_1);
var classP7_2 = new Person7Klass();
classP7_2.A1 = "male";
classP7_2.A2 = "female";
classP7_2.A3 = "female";
console.log(classP7_2);
