/* 
  6. Genercis with extends
    * 클래스에서는 상속이라는 의미로 쓰인다. 
    * Geenrcis에서는 상속이외에 다른 의미로 쓰인다. 
*/
/* 
  * T가 string | number를 상속 받는 의미가 아니다. 
  * [point] T는 string, number 둘중 하나만 가능하다는 의미 !!
  * [point] 협업 할때 타입을 최대한 작음 범위로 하는 것을 추천!
  * [point] 그래서 generic을 쓸때 extends를 떠올리는 것을 추천!
*/
class PersonExtends<T extends string | number> {
  private _name: T;

  constructor(name: T){
    this._name = name;
  }
}

new PersonExtends("jyoon");
new PersonExtends(33)
// new PersonExtends(true); // error generic의 extends 설정 때문에
