"use strict";
/*
  # 4. Generics Function
  * 함수 정의에 generic을 추가해야한다면 "type alias, interface"를 설정하면 된다.
  * 기존 함수에 type을 설정하는것에 generic을 추가하면 된다.
    * 함수에 type을 적용 ( (message: T) => T; )
    * gerneric 추가 ( <T>(message: T) => T; )
*/
var helloFunction1 = function (message) {
    return message;
};
var helloFunction2 = function (message) {
    return message;
};
/*
  function에 generic 설정
*/
function helloFunction3(message) {
    return message;
}
