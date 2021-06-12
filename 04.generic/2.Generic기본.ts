/* 
  # 2.generic기본
    - generic 설정시 type을 직접 입력, 값을 입력하는 방법으로 2가지 방법이 있다.
    - 값을 직접입력시 number 입력할때는 type이 입력한 값으로 설정된다.
      - string, boolean 값은 "string, boolean"으로 설정 된다.
*/



function fnGeneric2<T, U> (message: T, msgNumber: U): T {
  return message;
}
const fnGener2_1 = function <T, U> (message: T, msgNumber: U): T {
  return message;
}

// function fnGeneric2<string, number>(message: string, msgNumber: number): string
const result2_1 = fnGeneric2<string, number>("Jyoon", 123) // <T>: string, number로 설정

//function fnGeneric2<33, number>(message: 33, msgNumber: number): 33
// # 방법 1 - number
const result2_2 = fnGeneric2(33, 123); // <T>: type이 33으로로 추론된다.(number가 아니다.)

// function fnGeneric2<33, string>(message: 33, msgNumber: string): 33
// # 방법 2 - string
const result2_3 = fnGeneric2(33, "123"); // <U>: string으로 추론

// function fnGeneric2<33, boolean>(message: 33, msgNumber: boolean): 33
// # 방법 3 - boolean
const result2_4 = fnGeneric2(33, true); // <U>: boolean으로 추론

console.log({result2_1
  , result2_2
  , result2_3
  , result2_4});