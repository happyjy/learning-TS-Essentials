/* 
  # 첫번째 방식을 더 추천
    * jsx, tsx에서 충돌날 수 있다.
*/
let list: number[] =[1,2,3];
// let list: Array<number> = [1,2,3];


/* 
  # array안에 하나 이상의 type을 사용할 때 
    * => union type을 사용한다. 
*/
let list1 : (number | string)[] =[1,2,3,"4"]; 


/* 
  # tuple 
    * array type에서는 몇번째 인자에 어떤 타입인지 모르나 
    * 튜플은 알 수있다. 
*/