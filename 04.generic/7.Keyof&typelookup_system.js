"use strict";
/*
  # keyof & type lookup system
    * keyof 키워드, generics을 통해서 type을 찾아 활용하는 방법을 알아본다.
    * 확인순서 4단계
      - [확인순서1] 문제
      - [확인순서2] [point] keyof 란?
      - [확인순서3] keyof를 사용해도 name을 입력했을때 return type이 string이라는 것을 보장하지 못한다.
      - [확인순서4] keyof & generic 사용으로 호출한 프로퍼티 명의 type을 찾아 활용
*/
var generic7 = {
    name: "jyoon",
    age: 33
};
// const kyes1: Keys = "age1"; //error: Type '"age1"' is not assignable to type 'keyof Igeneric7'.ts(2322)
var kyes2 = "age";
var kyes3 = "name";
console.log({ kyes2: kyes2, kyes3: kyes3 });
console.log({ "generic7[kyes2]": generic7[kyes2], "generic7[kyes3]": generic7[kyes3] });
/*
  STEP1
*/
function getProp_step1(obj, key) {
    return obj[key];
}
/*
  STEP2
*/
/*
  * [확인순서3] keyof를 사용해도 name을 입력했을때 return type이 string이라는 것을 보장하지 못한다.
  * [point] Igeneric7[keyof Igeneric7] 의미
    => Igeneric7["name" | "age"]
    => Igeneric7["name"] | Igeneric7["age"]
    => string | number
*/
function getProp_step2(obj, key) {
    return obj[key];
}
/*
  STEP3

    * [확인순서4] keyof & generic 사용으로 호출한 프로퍼티 명의 type을 찾아 활용
    * extends: generics에서는 뒤에 나오는 타입중 하나!
    * keyof: 키워드를 사용한 객체의 타입
  
    * [point]다음 코드 분석
      ```
        getProps_step3(generic7, "name")
      ```
      - T: Igeneric7
      - keyof T: "age" | "name"
      - K extends keyof T: "name" | "name"
      - T[K]:
*/
function getProp_step3(obj, key) {
    return obj[key];
}
// function getProp_step3<Igeneric7, "name">(obj: Igeneric7, key: "name"): string
getProp_step3(generic7, "name");
// function getProp_step3<Igeneric7, "age">(obj: Igeneric7, key: "age"): number
getProp_step3(generic7, "age");
// function setProp_step1(obj: Igeneric7, key: "name" | "age", value: /* [문제] */string | number): void{
//   obj[key] = value; //error: Type 'string | number' is not assignable to type 'never'.
// }
function setProp_step2(obj, key, value) {
    obj[key] = value;
}
/*
  # generic type 추론 결과
    * function setProp_step2<Igeneric7, "age">(obj: Igeneric7, key: "age", value: number): void
 */
setProp_step2(generic7, "age", 22);
