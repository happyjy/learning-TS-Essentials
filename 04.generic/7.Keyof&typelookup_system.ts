/* 
  # keyof & type lookup system
    * keyof 키워드, generics을 통해서 type을 찾아 활용하는 방법을 알아본다. 
    * 확인순서 4단계
      - [확인순서1] 문제 
      - [확인순서2] [point] keyof 란?
      - [확인순서3] keyof를 사용해도 name을 입력했을때 return type이 string이라는 것을 보장하지 못한다.
      - [확인순서4] keyof & generic 사용으로 호출한 프로퍼티 명의 type을 찾아 활용
*/

interface Igeneric7 {
  name: string;
  age: number;
}

const generic7: Igeneric7 = {
  name: "jyoon", 
  age: 33
}


/* 
  # [확인순서1] 문제 
    1. key가 name이면 string, age면 number값을 return 하는데 
    2. [문제] 주석을 보면 유니온 타입으로 되어 있는데 이건 1번 작성한 것에 위배 되는 경우가 생긴다.(string, number둘 중 어느것을 가르키는지 모른다.) 
    2.1 key가 name이면 return value는 string이여야 한다는 것을 확실하게 해야한다. 
    3. 그래서! "keyof" 라는 키워드를 사용하게 된다.
*/
/* 
  # [확인순서2] [point]keyof 란?
    * 어떤 객체 앞에 keyof를 사용하면 return은 type이다 
    * return type: keyof를 붙인 property name이 된다.
*/

type Keys = keyof Igeneric7;
// const kyes1: Keys = "age1"; //error: Type '"age1"' is not assignable to type 'keyof Igeneric7'.ts(2322)
const kyes2: Keys = "age";
const kyes3: Keys = "name";

console.log({kyes2, kyes3});
console.log({"generic7[kyes2]": generic7[kyes2], "generic7[kyes3]": generic7[kyes3]});


/* 
  STEP1
*/
function getProp_step1(obj: Igeneric7, key: "name" | "age"): /* [문제] */string | number{
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
function getProp_step2(obj: Igeneric7, key: keyof Igeneric7): Igeneric7[keyof Igeneric7]{
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
function getProp_step3<T, K extends keyof T>(obj: T, key: K):T[K]{
  return obj[key];
}

// function getProp_step3<Igeneric7, "name">(obj: Igeneric7, key: "name"): string
getProp_step3(generic7, "name")
// function getProp_step3<Igeneric7, "age">(obj: Igeneric7, key: "age"): number
getProp_step3(generic7, "age")




// function setProp_step1(obj: Igeneric7, key: "name" | "age", value: /* [문제] */string | number): void{
//   obj[key] = value; //error: Type 'string | number' is not assignable to type 'never'.

// }

function setProp_step2<T, K extends keyof T>(obj: T, key: K, value: T[K]): void{
  obj[key] = value;
}


/* 
  # generic type 추론 결과 
    * function setProp_step2<Igeneric7, "age">(obj: Igeneric7, key: "age", value: number): void
 */
setProp_step2(generic7, "age", 22);