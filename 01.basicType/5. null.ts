// let age: number = undefined;

// 아래 null은 undefine에 할당 안됨.
// let u:undefined = null;

// undefined는 void에 할당가능
let v:void = undefined;

 
/* 
  # union type 
    * union 변수에는 string, null 타입을 할당 할 수 있다.

  # type guard
    * string | null 중 null이 아닐때 특별한 동작을 하게 하는 기능
*/
let union: string | null= null;

union = "Yoon"
 