/* 
  # 1. generics, Any와 다른 점.
  # 아래 숫자 순서대로 확인하기 
    * [1, 1.1, 2, 2.1, 3, 3.1, 3.2, 3.3]
*/
/* 
  # Generics 특징
    * 1. 같은 함수에서 다른 인자, 반환값이 필요할때 
      * 계속 해서 같은 함수를 사용해 다른 인자, 반환값 코드를 작성시 비효율적이다(코드낭비)
    * 1.1 모든 타입을 다룰 수 있는 메커니즘(generic)이 필요하다
*/

function generic1(message: string): string{
  return message;
}
function generic2(message: number): number{
  return message;
}

// 함수가 더 많이 반복되면 비효율적이다 => 그럼 any를 쓰면 어떨까? 

/* 
  # any 사용
    - 2. any를 사용하면 인자, 반환값을 어느 값이나 받을 수 있어 Genric 메커니즘이 필요 없다고 생각할 수 있다.
    - 2.1 generic3(32).length 이와같은 코드에서 32은 number type이라서 length가 없다. => 그래서 undefined를 호출합니다.
*/
function generic3(message: any): any {
  return message;
}
console.log(generic3("JYoon").length);
console.log(generic3(32).length);   // undefined 값이 


/*  
  # generic 사용
    - 3. <T>(type) 키워드를 이용해서 funciton, 인자, 반환값 type으로 작성합니다. 
    - 3.1 인자값 type이 function, 인자, 반환값으로 설정됩니다.
    - 3.2 any는 어떤 타입이든 다 받을 수 있기 때문에 달라지는 타입에 의해서 코드를 작성하기 까다롭다. 
    - 3.3 하지만 generic은 해당 타입으로 들어오게되면 들어온 타입에 따라 연산이 가능하게 됩니다.
*/
function generic4<T>(message: T): T {
  return message;
}

console.log(generic4("Jyoon").length);
// console.log(generic4(32).length); // error
console.log(generic4(32));
console.log(generic4(true));