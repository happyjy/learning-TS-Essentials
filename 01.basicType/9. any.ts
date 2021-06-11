/* 
  * 타입 시스템에서 any를 최대한 지양한다.
  * log를 남기는 경우는 any를 사용할 수 있다. 
*/

function returnAny(msg: any): any {
  console.log(msg);
}

const any1 = returnAny("리턴은 아무거나");

any1.toString();

/* 
  # any 사용시 전파된다.
    - point1 에서 전파를 끊을 수 있다. 
    - 더 좋은 방법은 함수에서 사용되기전에 객체에 있는 타입을 설정해주는게 좋다. 
      - 이 방법이 "unknown"이다.
*/
let looselyTyped: any = {};
const d = looselyTyped.a.b.c.d;

function leakingAny(obj:any){
  // [# point] type guard 역할을 한다.
  //   - any가 전파되지 않기 위해서 
  const a:number = obj.num;
  const b = a + 1;
  return b;
}

const c = leakingAny({num: 0});
// c.indexOf("0"); //indexOf string type객체의 함수