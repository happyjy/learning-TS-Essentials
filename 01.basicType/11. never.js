"use strict";
/*
  11. never
    * return에 사용된다.
    * 모든 타입의 subtype
    * never에는 어떤 것도 할당할 수 없다.
    * any도 never에게 할당 할 수 없다.
    * 잘못된 타입을 넣는 실수를 막고자 할 때 사용한다.
*/
/*
  # 예1 함수가 어떤 값을 return 하지 않는 경우
*/
function error(msg) {
    throw new Error(msg);
}
function fail() {
    return error("failed");
}
function infiniteLoop() {
    while (true) { }
}
if (typeof aTest !== "string") {
    aTest;
}
/*
  * 아래와 같은 에러 발생
    - Type 'string' is not assignable to type 'never'.ts(2322)
    - 즉 잘못된 타입을 막는데 사용한다.
*/
// const bTest: Indexable<{}> = '';
