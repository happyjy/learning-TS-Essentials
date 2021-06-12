"use strict";
/*
  3. Generics Array & Tuple
*/
/*
  # 3.1 Gernerics Array
*/
function fnGeneric3(message) {
    return message[0];
}
// * generic 추론 결과
//  - function fnGeneric3<string>(message: string[]): string
fnGeneric3(["hi", "world"]);
// function fnGeneric3<string | number>(message: (string | number)[]): string | number
// * generic이 <string | number>로 union type이 됩니다.
// * return type도 <string | number>가 되기 때문에 length 프로퍼티를 호출 할 수 없다.
fnGeneric3(["hi", 123]);
// fnGeneric3(["hi", 123]).length ; // <string | number> union tpye이기 때문에 호출 안됨.
/*
  # 3.2 Gernerics Tuple
*/
function fnGeneric3_2(message) {
    return message[0];
}
// * generic 추론 결과
//   - function fnGeneric3_2<string, number>(message: [string, number]): string
// fnGeneric3(["hi", 123])와 다르게 length를 호출할 수 있다.
fnGeneric3_2(["hi", 123]).length;
